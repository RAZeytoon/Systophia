import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"

// «پیشین / بعدی» برای درس‌های شماره‌دار (مثل «۰۳ تحلیل چیست؟»). ترتیب بر اساس شماره‌ی ابتدای نام
// فایل است، در کل پوشه‌ی اصلی (یعنی پیوسته از فصل اول تا فصل سوم).
const numOf = (filePath: string | undefined): number | null => {
  const base = (filePath ?? "").split("/").pop() ?? ""
  const m = base.match(/^([0-9۰-۹]+)\s+/)
  if (!m) return null
  return parseInt(m[1].replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))), 10)
}

export default (() => {
  const PrevNext: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
    const me = numOf(fileData.filePath)
    if (me === null) return null
    const top = (fileData.slug as string).split("/")[0]
    const series = allFiles
      .filter((f) => f.slug && f.slug.split("/")[0] === top && numOf(f.filePath) !== null)
      // اول پوشه‌ی فصل (۰۱ فصل اول، ۰۲ فصل دوم…) و بعد شماره‌ی درس؛ چون شماره‌ی «۰۸» در دو فصل تکرار شده
      .sort((a, b) => {
        const da = a.slug!.split("/").slice(0, -1).join("/")
        const db = b.slug!.split("/").slice(0, -1).join("/")
        return (
          da.localeCompare(db, undefined, { numeric: true }) || numOf(a.filePath)! - numOf(b.filePath)!
        )
      })
    const i = series.findIndex((f) => f.slug === fileData.slug)
    if (i < 0) return null
    const prev = i > 0 ? series[i - 1] : null
    const next = i < series.length - 1 ? series[i + 1] : null
    if (!prev && !next) return null
    const isEn = cfg.locale?.startsWith("en")
    const title = (f: (typeof series)[number]) =>
      String(f.frontmatter?.title ?? f.slug).replace(/^[0-9۰-۹]+\s+/, "")
    const href = (f: (typeof series)[number]) =>
      resolveRelative(fileData.slug as FullSlug, f.slug as FullSlug)
    return (
      <nav class="prev-next" aria-label={isEn ? "Previous and next lesson" : "درس قبلی و بعدی"}>
        {prev ? (
          <a class="internal prev" href={href(prev)}>
            <span class="pn-label">{isEn ? "Previous" : "پیشین"}</span>
            <span class="pn-title">{title(prev)}</span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a class="internal next" href={href(next)}>
            <span class="pn-label">{isEn ? "Next" : "بعدی"}</span>
            <span class="pn-title">{title(next)}</span>
          </a>
        ) : (
          <span />
        )}
      </nav>
    )
  }

  PrevNext.css = `
.prev-next { display: flex; gap: 1rem; margin-top: 2.5rem; }
.prev-next > * { flex: 1 1 0; min-width: 0; }
.prev-next a { display: flex; flex-direction: column; gap: 0.2rem; border: 1px solid var(--lightgray); border-radius: 5px; padding: 0.6rem 0.9rem; text-decoration: none; background: transparent; }
.prev-next a:hover { border-color: var(--secondary); }
.prev-next .pn-label { font-size: 0.8rem; color: var(--gray); }
.prev-next .pn-title { font-weight: 600; }
.prev-next .next { text-align: end; }
@media all and (max-width: 600px) { .prev-next { flex-direction: column; } }
`
  return PrevNext
}) satisfies QuartzComponentConstructor
