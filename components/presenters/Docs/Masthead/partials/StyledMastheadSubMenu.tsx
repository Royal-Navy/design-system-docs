import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color, shadow } = selectors

export const StyledMastheadSubMenu = styled.nav`
  position: absolute;
  top: ${spacing('12')};
  left: 0;
  border: 1px solid ${color('neutral', '100')};
  border-radius: 8px;
  background-color: ${color('neutral', 'white')};
  padding: ${spacing('10')};
  box-shadow: ${shadow('2')};
  white-space: nowrap;
`
