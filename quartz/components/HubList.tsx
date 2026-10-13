import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"

// صفحه‌ی «هاب» هر بخش (مثلاً سیستم/سیستم.md) در Obsidian با dataview فهرست نوشته‌های پوشه را می‌سازد.
// Quartz dataview را اجرا نمی‌کند؛ این کامپوننت همان فهرست را روی سایت می‌سازد
// (و بلوک dataview با CSS پنهان می‌شود).
const HubList: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
  const slug = fileData.slug as string
  const parts = slug.split("/")
  if (parts.length < 2 || parts[parts.length - 1] !== parts[parts.length - 2]) {
    return null
  }
  const folder = parts.slice(0, -1).join("/") + "/"
  const items = allFiles
    .filter((f) => f.slug && f.slug.startsWith(folder) && f.slug !== slug && !f.slug.endsWith("/index"))
    .sort((a, b) => a.slug!.localeCompare(b.slug!, undefined, { numeric: true, sensitivity: "base" }))
  if (items.length === 0) {
    return null
  }
  const isEn = cfg.locale?.startsWith("en")
  const label = (f: (typeof items)[number]) =>
    String(f.frontmatter?.title ?? f.slug!.split("/").pop()).replace(/^[0-9۰-۹]+\s+/, "")
  return (
    <div class="hub-list">
      <h3>{isEn ? "In this section" : "در این بخش"}</h3>
      <ul>
        {items.map((f) => (
          <li>
            <a href={resolveRelative(fileData.slug as FullSlug, f.slug as FullSlug)} class="internal">
              {label(f)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

HubList.css = `
pre[data-language="dataview"] { display: none; }
.hub-list { margin-top: 1.5rem; }
.hub-list ul { padding-inline-start: 1.2rem; }
`

export default (() => HubList) satisfies QuartzComponentConstructor
