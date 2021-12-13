import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing, mq } = selectors

export const StyledDescription = styled.p`
  font-size: 16px;
  color: ${color('neutral', '500')};
  line-height: 1.5;
  font-weight: 400;
  padding: ${spacing('8')} 0;
  max-width: 550px;

  ${mq({ gte: 's' })`
    padding: ${spacing('8')};
  `}

  ${mq({ gte: 'm' })`
    padding: ${spacing('12')} ${spacing('8')};
    font-size: 18px;
    max-width: 660px;
  `}
`
