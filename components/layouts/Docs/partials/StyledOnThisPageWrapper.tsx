import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, mq, spacing } = selectors

export const StyledOnThisPageWrapper = styled.div`
  display: none;
  background-color: ${color('neutral', 'white')};
  padding: 0 ${spacing('15')} ${spacing('15')};

  ${mq({ gte: 'l' })`
    display: block;
  `}
`
