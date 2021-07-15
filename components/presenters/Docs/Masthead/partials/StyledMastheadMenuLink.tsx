import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledMastheadMenuLink = styled.a`
  color: ${color('neutral', '500')};
  font-size: ${fontSize('m')};
  font-weight: 600;

  &:hover {
    text-decoration: none;
  }
`
