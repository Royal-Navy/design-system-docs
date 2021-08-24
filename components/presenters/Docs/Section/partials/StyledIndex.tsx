import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, color, shadow, mq } = selectors

export const StyledIndex = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${shadow('4')};
  border: 1px solid ${color('neutral', '100')};
  border-radius: 15px;
  font-size: ${fontSize('xl')};
  color: ${color('neutral', '400')};
  font-weight: 700;
  width: 50px;
  height: 50px;

  ${mq({ gte: 'm' })`
    font-size: 24px;
  `}
`
