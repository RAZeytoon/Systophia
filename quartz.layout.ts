import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// "۰۳ تحلیل چیست؟" -> "تحلیل چیست؟": فایل‌ها با پیشوند عددی مرتب می‌شوند، ولی خواننده عدد را نبیند.
// نسخه‌ی انگلیسی با QUARTZ_LANG=en ساخته می‌شود.
const isEn = process.env.QUARTZ_LANG === "en"

const stripNumberPrefix = (node: { displayName: string }) => {
  node.displayName = node.displayName.replace(/^[0-9۰-۹]+\s+/, "")
  return node
}

const explorer = () =>
  Component.Explorer({
    // ترتیب: فیلتر، مرتب‌سازی (با پیشوند عددی)، و بعد حذف پیشوند از عنوان نمایشی
    order: ["filter", "sort", "map"],
    mapFn: stripNumberPrefix,
    filterFn: (node) => {
      // exclude files with the tag "explorerexclude"
      return node.file?.frontmatter?.tags?.includes("explorerexclude") !== true
    },
  })

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.HubList(),
    Component.IndexOnly(
      Component.RecentNotes({
        title: isEn ? "Latest posts" : "تازه‌ترین نوشته‌ها",
        limit: 6,
        filter: (f) =>
          f.slug !== "index" && !f.slug?.endsWith("/index") && !f.slug?.startsWith("tags/"),
        showTags: false,
        linkToMore: false,
      }),
    ),
  ],
  footer: Component.Footer({
    links: {
      // "آپارات": "https://www.aparat.com/Crystalline",
      // "گیت‌هاب": "https://github.com/eledah",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.Backlinks()),

    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),
    Component.MobileOnly(Component.LanguageSwitch()),
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.Search(),
    Component.DesktopOnly(Component.Darkmode()),
    Component.LanguageSwitch(),
    Component.DesktopOnly(explorer()),
    Component.DesktopOnly(Component.TableOfContents()),

    Component.MobileOnly(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),
    Component.MobileOnly(Component.LanguageSwitch()),
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.Search(),
    Component.DesktopOnly(Component.Darkmode()),
    Component.LanguageSwitch(),
    Component.DesktopOnly(explorer()),
  ],
}
