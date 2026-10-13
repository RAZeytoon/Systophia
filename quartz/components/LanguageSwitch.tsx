import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// پیوند به نسخه‌ی زبان دیگر. فارسی در ریشه و انگلیسی زیر /en/ است.
// اگر صفحه فیلد `translation` داشته باشد به صفحه‌ی متناظر می‌رود، وگرنه به صفحه‌ی اصلی زبان دیگر.
const LanguageSwitch: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
  const isEn = cfg.locale?.startsWith("en")
  const root = pathToRoot(fileData.slug!)
  const translation = fileData.frontmatter?.translation as string | undefined
  const target = translation && translation !== "index" ? translation : ""
  // از فارسی به انگلیسی: <root>/en/<slug>؛ از انگلیسی به فارسی: <root>/../<slug>
  const href = isEn ? `${root}/../${target}` : `${root}/en/${target}`
  return (
    <div class={classNames(displayClass, "language-switch")}>
      <a href={href} hreflang={isEn ? "fa" : "en"} lang={isEn ? "fa" : "en"}>
        {isEn ? "فارسی" : "English"}
      </a>
    </div>
  )
}

LanguageSwitch.css = `
.language-switch a {
  font-size: 0.9rem;
  border: 1px solid var(--lightgray);
  border-radius: 5px;
  padding: 2px 10px;
  color: var(--darkgray);
}
.language-switch a:hover {
  color: var(--secondary);
  border-color: var(--secondary);
}
`

export default (() => LanguageSwitch) satisfies QuartzComponentConstructor
