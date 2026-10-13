import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { googleFontHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
    const description =
      fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)

    const iconPath = joinSegments(baseDir, "static/icon.png")
    const ogImagePath = `https://${cfg.baseUrl}/static/og-image.png`

    // hreflang: صفحه‌های دارای فیلد translation (اسلاگ صفحه‌ی متناظر در زبان دیگر).
    // فارسی در ریشه‌ی سایت است و انگلیسی زیر /en/.
    const translation = fileData.frontmatter?.translation as string | undefined
    const selfLang = cfg.locale?.split("-")[0] ?? "fa"
    const otherLang = selfLang === "en" ? "fa" : "en"
    const siteRoot = (cfg.baseUrl ?? "").replace(/\/en\/?$/, "")
    const tail = (s: string) => (s === "index" ? "" : s)
    const selfHref = `https://${cfg.baseUrl}/${tail(fileData.slug ?? "")}`
    const alternate = translation
      ? `https://${siteRoot}${selfLang === "en" ? "" : "/en"}/${tail(translation)}`
      : undefined

    // داده‌ی ساخت‌یافته (JSON-LD) برای موتورهای جست‌وجو؛ فقط برای نوشته‌ها، نه صفحه‌ی اصلی
    const isIndex = fileData.slug === "index"
    const tagList = ((fileData.frontmatter?.tags as string[] | undefined) ?? []).filter(Boolean)
    const canonical = encodeURI(selfHref)
    const jsonLd = isIndex
      ? {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: cfg.pageTitle,
          url: canonical,
          inLanguage: selfLang,
        }
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          inLanguage: fileData.frontmatter?.lang ?? selfLang,
          url: canonical,
          datePublished: fileData.dates?.created?.toISOString?.(),
          dateModified: fileData.dates?.modified?.toISOString?.(),
          keywords: tagList.length ? tagList.join(", ") : undefined,
          publisher: { "@type": "Organization", name: cfg.pageTitle },
        }
    const jsonLdText = JSON.stringify(jsonLd).replace(/</g, "\\u003c")

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {cfg.baseUrl && <meta property="og:image" content={ogImagePath} />}
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="675" />
        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content={isIndex ? "website" : "article"} />
        <meta property="og:site_name" content={cfg.pageTitle} />
        <meta property="og:locale" content={(cfg.locale ?? "fa-IR").replace("-", "_")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {tagList.length > 0 && <meta name="keywords" content={tagList.join(", ")} />}
        <link rel="alternate" type="application/rss+xml" title={cfg.pageTitle} href={`https://${cfg.baseUrl}/index.xml`} />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href={joinSegments(baseDir, "static/fonts/Vazirmatn-Variable.woff2")}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText }} />
        {alternate && (
          <>
            <link rel="alternate" hreflang={selfLang} href={selfHref} />
            <link rel="alternate" hreflang={otherLang} href={alternate} />
          </>
        )}
        {css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
        ))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
