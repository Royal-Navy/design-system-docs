import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import hexRgb from 'hex-rgb'

const { fontSize, color } = selectors

function getColorWithOpacity(hexColor: string) {
  const values = hexRgb(hexColor, { format: 'object' })

  return css`
    rgba(${values.red}, ${values.green}, ${values.blue}, 0.23);
  `
}

export const StyledTitle = styled.span`
  font-size: ${fontSize('xxl')};
  font-weight: 700;
  text-shadow: 0px 1px 2px ${getColorWithOpacity(color('neutral', 'black'))};
`
