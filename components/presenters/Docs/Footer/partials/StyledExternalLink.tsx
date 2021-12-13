import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing } = selectors

export const StyledExternalLink = styled.span`
  & > svg {
    position: relative;
    top: 3px;
    right: ${spacing('2')};
  }

  & > a {
    color: ${color('neutral', '100')};
  }
`
