import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize, color, shadow, mq } = selectors

export const StyledIndex = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${color('neutral', '100')};
  border-radius: 15px;
  font-size: ${fontSize('xl')};
  color: ${color('neutral', '400')};
  font-weight: 700;
  width: 50px;
  height: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

  ${mq({ gte: 'm' })`
    font-size: 24px;
  `}
`
