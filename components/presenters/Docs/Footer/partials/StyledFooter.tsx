import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, mq } = selectors

export const StyledFooter = styled.div`
  position: relative;
  background-color: ${color('neutral', '500')};
  color: ${color('neutral', '100')};
  height: 542px;
  overflow: hidden;

  ${mq({ gte: 's' })`
    height: 503px;
  `}
`
