import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, mq, spacing } = selectors

export const StyledTitle = styled.h1`
  color: ${color('neutral', '700')};
  font-weight: 900;
  font-size: 28px;
  max-width: 630px;
  margin-top: ${spacing('12')};

  ${mq({ gte: 's' })`
    font-size: 34px;
  `}

  ${mq({ gte: 'm' })`
    font-size: 46px;
    max-width: 825px;
  `}

  ${mq({ gte: 'xl' })`
    max-width: 1104px;
    font-size: 60px;
  `}
`
