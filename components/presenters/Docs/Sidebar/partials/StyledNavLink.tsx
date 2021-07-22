import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledNavLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${color('neutral', '500')};
  font-weight: normal;
  font-size: ${fontSize('base')};
`
