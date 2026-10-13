import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"

// صفحه‌ی «هاب» هر بخش (مثلاً سیستم/سیستم.md) در Obsidian با dataview فهرست نوشته‌های پوشه را می‌سازد.
// Quartz dataview را اجرا نمی‌کند؛ این کامپوننت همان فهرست را روی سایت می‌سازد، با گروه‌بندی بر اساس
// زیرپوشه‌ی مستقیم (هر گروه یک بخش جمع‌شونده)، و بلوک dataview با CSS پنهان می‌شود.
const stripNum = (s: string) => s.replace(/^[0-9۰-۹]+\s+/, "")

// ترتیب نمایش: شناسنامه، نقشه، ماتریس، بقیه
const rank = (name: string) =>
  name.includes("شناسنامه") ? 0 : name.includes("نقشه") ? 1 : name.includes("ماتریس") ? 2 : 3

const HubList: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
  const slug = fileData.slug as string
  const parts = slug.split("/")
  if (parts.length < 2 || parts[parts.length - 1] !== parts[parts.length - 2]) {
    return null
  }
  // هاب‌هایی که فهرست دست‌نویس دارند، با «hub-list: false» از فهرست خودکار کنار می‌روند
  if (fileData.frontmatter?.["hub-list"] === false) {
    return null
  }
  const folder = parts.slice(0, -1).join("/") + "/"
  const items = allFiles.filter(
    (f) => f.slug && f.slug.startsWith(folder) && f.slug !== slug && !f.slug.endsWith("/index"),
  )
  if (items.length === 0) {
    return null
  }
  const isEn = cfg.locale?.startsWith("en")
  const label = (f: (typeof items)[number]) =>
    stripNum(String(f.frontmatter?.title ?? f.slug!.split("/").pop()))
  const sorter = (a: (typeof items)[number], b: (typeof items)[number]) =>
    rank(label(a)) - rank(label(b)) ||
    a.slug!.localeCompare(b.slug!, undefined, { numeric: true, sensitivity: "base" })

  // گروه‌بندی بر اساس اولین زیرپوشه‌ی بعد از پوشه‌ی هاب
  const depth = parts.length - 1
  const direct: typeof items = []
  const groups = new Map<string, typeof items>()
  for (const f of items) {
    const rel = f.slug!.split("/")
    // filePath ممکن است پیشوند «content/» داشته باشد؛ فقط به اندازه‌ی طول slug از انتها برمی‌داریم
    const fp = (f.filePath ?? "").split("/")
    const segs = fp.length >= rel.length ? fp.slice(fp.length - rel.length) : rel
    if (rel.length === depth + 1) {
      direct.push(f)
    } else {
      const key = segs[depth] ?? rel[depth]
      if (!groups.has(key)) groups.set(key, [])
      groups.get(key)!.push(f)
    }
  }
  const link = (f: (typeof items)[number]) => (
    <li>
      <a href={resolveRelative(fileData.slug as FullSlug, f.slug as FullSlug)} class="internal">
        {label(f)}
      </a>
    </li>
  )
  const groupKeys = [...groups.keys()].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  )
  return (
    <div class="hub-list">
      <h3>{isEn ? "In this section" : "در این بخش"}</h3>
      {direct.length > 0 && <ul>{direct.sort(sorter).map(link)}</ul>}
      {groupKeys.map((k) => {
        const g = groups.get(k)!.sort(sorter)
        return (
          <details open={g.length <= 8}>
            <summary>
              {stripNum(k)} <span class="hub-count">({g.length})</span>
            </summary>
            <ul>{g.map(link)}</ul>
          </details>
        )
      })}
    </div>
  )
}

HubList.css = `
pre[data-language="dataview"] { display: none; }
.hub-list { margin-top: 1.5rem; }
.hub-list ul { padding-inline-start: 1.2rem; margin-top: 0.4rem; }
.hub-list details { margin: 0.8rem 0; border: 1px solid var(--lightgray); border-radius: 5px; padding: 0.4rem 0.8rem; }
.hub-list summary { cursor: pointer; font-weight: 600; }
.hub-list .hub-count { color: var(--gray); font-weight: 400; font-size: 0.9em; }
`

export default (() => HubList) satisfies QuartzComponentConstructor
