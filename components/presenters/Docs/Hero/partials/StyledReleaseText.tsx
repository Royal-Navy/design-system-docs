import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledReleaseText = styled.div`
  margin: ${spacing('8')};
  color: ${color('neutral', '500')};
  font-size: 14px;

  a {
    color: inherit;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`
