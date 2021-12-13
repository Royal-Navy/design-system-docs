import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize, mq, color } = selectors

export const StyledMain = styled.main`
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100vh;
  font-size: ${fontSize('base')};
  color: ${color('neutral', '400')};
  font-weight: 200;
  padding-top: 60px;

  ${mq({ gte: 'm' })`
    padding-left: 300px;
  `}
`
