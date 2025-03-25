import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      // "آپارات": "https://www.aparat.com/2zeytoon",
      // "گیت‌هاب": "https://github.com/RAZeytoon",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
  ],
  left: [
    Component(Component.Graph()),
    Component(Component.Backlinks()),

    Component(Component.PageTitle()),
    Component(Component.Darkmode()),
  ],
  right: [
    Component(Component.PageTitle()),
    Component.Search(),
    Component(Component.Darkmode()),
    Component(Component.Explorer({
      filterFn: (node) => {
        // exclude files with the tag "explorerexclude"
        return node.file?.frontmatter?.tags?.includes("explorerexclude") !== true
      },
    })),
    Component(Component.TableOfContents()),

    Component(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component(Component.PageTitle()),
    Component(Component.Darkmode()),
  ],
  right: [
    Component(Component.PageTitle()),
    Component.Search(),
    Component(Component.Darkmode()),
    Component(Component.Explorer({
      filterFn: (node) => {
        // exclude files with the tag "explorerexclude"
        return node.file?.frontmatter?.tags?.includes("explorerexclude") !== true
      },
    })),
  ],
}
