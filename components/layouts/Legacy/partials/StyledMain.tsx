import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, mq, spacing } = selectors

export const StyledMain = styled.main`
  background-color: ${color('neutral', 'white')};
  box-shadow: inset 0px 1px 0px 0px ${color('neutral', '100')};
  flex: 1;

  ${mq({ gte: 's' })`
    box-shadow: inset 1px 0px 0px 0px ${color('neutral', '100')};
    padding: ${spacing('12')};
  `}

  ${mq({ gte: 'm' })`
    padding: ${spacing('13')};
  `}

  ${mq({ gte: 'l' })`
    padding: ${spacing('15')};
  `}

  ${mq({ gte: 'xl' })`
    box-shadow: inset 1px 0px 0px 0px ${color(
      'neutral',
      '100'
    )}, inset -1px 0 0 0 ${color('neutral', '100')};
  `}
`
