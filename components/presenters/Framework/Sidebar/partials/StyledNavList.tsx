import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledNavLink } from './StyledNavLink'

const { fontSize, spacing } = selectors

export const StyledNavList = styled.ul`
  padding: 0;

  &.is-code {
    ${StyledNavLink} {
      font-weight: 300;
      font-size: ${fontSize('base')};
      font-family: 'Fira Code', 'Courier New', Courier, monospace;
      padding-top: ${spacing('5')};
    }
  }
`
