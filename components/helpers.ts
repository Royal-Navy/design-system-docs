import { css } from 'styled-components'
import convert from 'color-convert'

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

function getColorWithOpacity(hexColor: string) {
  const [red, green, blue] = convert.hex.rgb(hexColor.slice(1)) // Slice to remove the '#'

  return css`
    rgba(${red}, ${green}, ${blue}, 0.4);
  `
}

export { warnIfOverwriting, getColorWithOpacity }
