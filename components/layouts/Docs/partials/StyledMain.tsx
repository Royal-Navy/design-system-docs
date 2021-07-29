import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, mq, spacing } = selectors

export const StyledMain = styled.main`
  background-color: ${color('neutral', 'white')};
  box-shadow: inset 0px 1px 0px 0px ${color('neutral', '100')};
  flex: 1;

  ${mq({ gte: 's' })`
    box-shadow: inset 1px 0px 0px 0px ${color('neutral', '100')};
    padding: ${spacing('15')};
  `}
`
