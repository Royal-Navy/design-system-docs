import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize, spacing, mq } = selectors

export const StyledMastheadSubMenuItem = styled.li`
  a {
    padding: ${spacing('3')} ${spacing('11')};
    font-size: ${fontSize('base')};
    display: block;
    border-radius: 3px;
    color: ${color('neutral', '400')};
    &:hover {
      color: ${color('neutral', '500')};
      background-color: ${color('neutral', '100')};
    }
    ${mq({ gte: 'm' })`
      padding: ${spacing('3')} ${spacing('6')} ${spacing('3')} ${spacing('5')};
    `}
  }
`
