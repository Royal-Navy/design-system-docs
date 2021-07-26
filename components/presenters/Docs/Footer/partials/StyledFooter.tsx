import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, mq } = selectors

export const StyledFooter = styled.div`
  background-color: ${color('neutral', '500')};
  color: ${color('neutral', '100')};
  height: 542px;

  ${mq({ gte: 's' })`
    height: 503px;
  `}
`
