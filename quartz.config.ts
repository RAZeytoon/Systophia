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
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
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
