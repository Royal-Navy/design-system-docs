import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing } = selectors

export const StyledTitle = styled.h2`
  position: relative;
  margin: ${spacing('10')} ${spacing('10')} ${spacing('12')};
  padding-left: 16px;
  font-size: 2rem;
  font-weight: 700;

  &::before {
    position: absolute;
    left: 0;
    content: '';
    height: 37px;
    width: 6px;
    background-color: #6e72ff;
    border-radius: 9999px;
  }

  ${mq({ gte: 's' })`
    margin: ${spacing('10')} 0 ${spacing('12')};
  `}
`
