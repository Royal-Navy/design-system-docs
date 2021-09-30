import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing, mq } = selectors

export const StyledTitle = styled.h2`
  font-size: 26px;
  color: ${color('neutral', '600')};
  font-size: ${fontSize('xxl')};
  font-weight: 700;
  margin: ${spacing('8')} 0 0 0;

  ${mq({ gte: 's' })`
    font-size: 38px;
  `}
`
