import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import hexRgb from 'hex-rgb'

const { fontSize, spacing, color, mq } = selectors

function getColorWithOpacity(hexColor: string) {
  const values = hexRgb(hexColor, { format: 'object' })

  return css`
    rgba(${values.red}, ${values.green}, ${values.blue}, 0.23);
  `
}

export const StyledDescription = styled.p`
  font-size: ${fontSize('m')};
  font-weight: 400;
  line-height: 1.5;
  margin: ${spacing('8')} 0;
  color: ${color('neutral', 'white')};
  text-shadow: 0px 1px 2px ${getColorWithOpacity(color('neutral', 'black'))};
  max-width: 550px;

  ${mq({ gte: 'l' })`
    font-size: 18px;
    line-height: 1.667;
  `}
`
