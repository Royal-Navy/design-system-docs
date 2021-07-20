import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledLinkList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-top: ${spacing('6')};

  & > li {
    position: relative;

    & > a {
      color: ${color('neutral', '100')};
    }

    & + li {
      &::before {
        position: absolute;
        top: 50%;
        left: 15px;
        content: '';
        display: inline-block;
        width: 3px;
        height: 3px;
        border-radius: 9999px;
        background-color: #748899;
      }

      padding-left: ${spacing('12')};
    }
  }
`
