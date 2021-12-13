import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, mq, spacing } = selectors

export const StyledLinkList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: ${spacing('6')} 0;

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

  ${mq({ gte: 's' })`
    justify-content: unset;
  `}
`
