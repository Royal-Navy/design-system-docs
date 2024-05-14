import convert from 'color-convert'

export function hexToRgb(color: string): string {
  const [red, green, blue] = convert.hex.rgb(color.slice(1)) // Slice to remove the '#'
  return `${red}, ${green}, ${blue}`
}
