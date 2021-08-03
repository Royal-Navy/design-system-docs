function warnIfOverwriting<P>(
  props: P,
  propertyName: string,
  componentName: string
): void {
  if (props[propertyName]) {
    // eslint-disable-next-line no-console
    console.warn(
      `Prop \`${propertyName}\` on \`${componentName}\` will be overwritten`
    )
  }
}

export { warnIfOverwriting }
