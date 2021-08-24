import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, mq } = selectors

export const StyledTitle = styled.h1`
  color: ${color('neutral', '700')};
  font-weight: 900;
  font-size: 28px;

  ${mq({ gte: 's' })`
    max-width: 630px;
    font-size: 34px;
  `}

  ${mq({ gte: 'l' })`
    max-width: 1104px;
    font-size: 60px;
  `}
`
