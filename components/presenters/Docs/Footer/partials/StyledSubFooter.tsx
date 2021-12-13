import styled, { css } from 'styled-components'
import hexRgb from 'hex-rgb'
import { selectors } from '@defencedigital/design-tokens'

const { color, mq, spacing, zIndex } = selectors

function getColorWithOpacity(hexColor: string) {
  const values = hexRgb(hexColor, { format: 'object' })

  return css`
    rgba(${values.red}, ${values.green}, ${values.blue}, 0.4);
  `
}

export const StyledSubFooter = styled.div`
  display: flex;
  align-items: center;
  background-color: ${getColorWithOpacity(color('neutral', '600'))};
  color: ${color('neutral', '100')};
  height: 265px;
  padding: 0 ${spacing('12')};

  & > div {
    text-align: center;
    width: 100%;
    z-index: ${zIndex('overlay', 1)};

    ${mq({ gte: 's' })`
      text-align: unset;
    `}
  }

  ${mq({ gte: 's' })`
    height: 205px;
  `}
`
