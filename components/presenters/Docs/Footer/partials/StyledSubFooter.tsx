import styled, { css } from 'styled-components'
import hexRgb from 'hex-rgb'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

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
  height: 205px;
  padding: 0 ${spacing('12')};

  & > div {
    width: 100%;
  }
`
