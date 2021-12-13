import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledIconNavLink = styled.a`
  color: ${color('neutral', '400')};
  font-weight: normal;
  font-size: ${fontSize('base')};

  & > svg {
    position: relative;
    top: 3px;
  }

  & > span {
    padding-left: ${spacing('2')};
  }
`
