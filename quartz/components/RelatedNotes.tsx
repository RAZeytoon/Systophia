import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"

// «نوشته‌های مرتبط»: بر اساس تگ‌های مشترک. وزن هر تگ برعکس تعداد نوشته‌های دارای آن است،
// تا تگ‌های خیلی عمومی (مثل #تحلیل_سیستم) همه‌چیز را به هم وصل نکنند.
export default (() => {
  const RelatedNotes: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
    const slug = fileData.slug as string
    const tags: string[] = (fileData.frontmatter?.tags as string[] | undefined) ?? []
    const isHub = slug.split("/").slice(-2)[0] === slug.split("/").slice(-1)[0]
    if (slug === "index" || slug.endsWith("/index") || slug.startsWith("tags/") || tags.length === 0 || isHub) {
      return null
    }
    const counts = new Map<string, number>()
    for (const f of allFiles) {
      for (const t of (f.frontmatter?.tags as string[] | undefined) ?? []) {
        counts.set(t, (counts.get(t) ?? 0) + 1)
      }
    }
    const mine = new Set(tags)
    const scored = allFiles
      .filter((f) => f.slug && f.slug !== slug && !f.slug.endsWith("/index") && !f.slug.startsWith("tags/"))
      .map((f) => {
        const ft = (f.frontmatter?.tags as string[] | undefined) ?? []
        let score = 0
        for (const t of ft) {
          if (mine.has(t)) score += 1 / (counts.get(t) ?? 1)
        }
        // نوشته‌ی هم‌پوشه کمی امتیاز بیشتری می‌گیرد
        if (score > 0 && f.slug!.split("/").slice(0, -1).join("/") === slug.split("/").slice(0, -1).join("/")) {
          score += 0.05
        }
        return { f, score }
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
    if (scored.length === 0) {
      return null
    }
    const isEn = cfg.locale?.startsWith("en")
    return (
      <div class="related-notes">
        <h3>{isEn ? "Related notes" : "نوشته‌های مرتبط"}</h3>
        <ul>
          {scored.map(({ f }) => (
            <li>
              <a href={resolveRelative(fileData.slug as FullSlug, f.slug as FullSlug)} class="internal">
                {String(f.frontmatter?.title ?? f.slug).replace(/^[0-9۰-۹]+\s+/, "")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  RelatedNotes.css = `
.related-notes { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--lightgray); }
.related-notes h3 { margin: 0 0 0.4rem 0; font-size: 1rem; }
.related-notes ul { margin: 0; padding-inline-start: 1.2rem; }
`
  return RelatedNotes
}) satisfies QuartzComponentConstructor
