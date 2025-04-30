import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"


const config: QuartzConfig = {
  /* ---------- تنظیمات سراسری ---------- */
  configuration: {
    pageTitle: "سیستوفیا",
    enableSPA: true,
    enablePopovers: true,
    locale: "fa-IR",
    baseUrl: "systophia.ir",   // بدون https:// و اسلش
	defaultDateType: "modified", 
    theme: {
      typography: { header: "Vazirmatn", body: "Vazirmatn", code: "IBM Plex Mono" },
      colors: {
        lightMode: { secondary: "#3f8cff", tertiary: "#ffa726" },
        darkMode:  { secondary: "#7b97aa", tertiary: "#ffa726" },
      },
    },
    styleOverrides: ["./static/custom.scss"], // فایل RTL
	    /* حتماً یک آرایه—even اگر خالی باشد */
    ignorePatterns: [],          // یا مثل: ["**/*.drawio", "**/*.psd"]

    theme: { /* … */ },
    styleOverrides: ["./static/custom.scss"],
  },

  /* ---------- پلاگین‌ها ---------- */
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate(),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" } }),
      Plugin.ObsidianFlavoredMarkdown(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],

    filters: [
      Plugin.RemoveDrafts(),
      // Plugin.ExplicitPublish(),   // در صورت نیاز
    ],

    emitters: [
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableRSS: true, enableSiteMap: true }), // RSS و sitemap
      Plugin.Static(),
      Plugin.Assets(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
