import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
// نسخه‌ی انگلیسی با QUARTZ_LANG=en ساخته می‌شود (scripts/build-all.mjs) و زیر /en/ منتشر می‌شود.
const isEn = process.env.QUARTZ_LANG === "en"

const config: QuartzConfig = {
  configuration: {
    pageTitle: isEn ? "Systophia" : "سیستوفیا",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: isEn ? "en-US" : "fa-IR",
    baseUrl: isEn ? "systophia.ir/en" : "systophia.ir",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "ui-monospace, Consolas, Menlo, monospace",
      },
      colors: {
        lightMode: {
          light: "#f6f7f5",
          lightgray: "#dfe4e7",
          gray: "#9aa6ae",
          darkgray: "#44515c",
          dark: "#16212b",
          secondary: "#b13c37",
          tertiary: "#2a6683",
          highlight: "rgba(42, 102, 131, 0.08)",
          textHighlight: "#f2d57a88",
        },
        darkMode: {
          light: "#111920",
          lightgray: "#243240",
          gray: "#5e6d7a",
          darkgray: "#b9c5ce",
          dark: "#e9eff3",
          secondary: "#e8736c",
          tertiary: "#62a8c6",
          highlight: "rgba(98, 168, 198, 0.10)",
          textHighlight: "#8a742388",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
