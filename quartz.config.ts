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
          light: "#f8f5f1",
          lightgray: "#e4d7c3",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#d79719",
          tertiary: "#b79d7b",
          highlight: "rgba(249, 233, 193, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#2a241d",
          lightgray: "#382d24",
          gray: "#646464",
          darkgray: "#d6c0a3",
          dark: "#ebdac6",
          secondary: "#e5aa1f",
          tertiary: "#7e694e",
          highlight: "rgba(85, 66, 23, 0.15)",
          textHighlight: "#b3aa0288",
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
