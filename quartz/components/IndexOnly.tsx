import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// Renders the wrapped component only on the home page (slug "index").
export default ((component?: QuartzComponent) => {
  if (component) {
    const Component = component
    const IndexOnly: QuartzComponent = (props: QuartzComponentProps) => {
      if (props.fileData.slug !== "index") {
        return null
      }
      return <Component {...props} />
    }

    IndexOnly.displayName = component.displayName
    IndexOnly.afterDOMLoaded = component?.afterDOMLoaded
    IndexOnly.beforeDOMLoaded = component?.beforeDOMLoaded
    IndexOnly.css = component?.css
    return IndexOnly
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor
