import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledOverviewNavLink = styled.a`
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
