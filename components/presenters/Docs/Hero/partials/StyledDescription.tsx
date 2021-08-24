import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, mq } = selectors

export const StyledDescription = styled.p`
  font-size: 16px;
  color: ${color('neutral', '500')};
  line-height: 1.5;
  font-weight: 500;
  margin: ${spacing('8')} ${spacing('6')};
  max-width: 550px;

  ${mq({ gte: 'l' })`
    max-width: 780px;
    font-size: 24px;
    margin: ${spacing('12')} ${spacing('6')};
  `}
`
