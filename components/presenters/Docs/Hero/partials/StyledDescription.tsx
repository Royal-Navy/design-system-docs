import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, mq } = selectors

export const StyledDescription = styled.p`
  font-size: 16px;
  color: ${color('neutral', '500')};
  line-height: 1.5;
  font-weight: 500;
  padding: ${spacing('8')} 0;
  max-width: 550px;

  ${mq({ gte: 'l' })`
    max-width: 780px;
    font-size: 24px;
    margin: ${spacing('12')} ${spacing('6')};
  `}
`
