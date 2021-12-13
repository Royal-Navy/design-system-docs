import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, mq, spacing } = selectors

export const StyledOnThisPageWrapper = styled.div`
  display: none;
  background-color: ${color('neutral', 'white')};
  padding: 0 ${spacing('15')} ${spacing('15')};

  ${mq({ gte: 'm' })`
    display: flex;
    align-items: flex-start;
    height: auto;
    padding: 0;
    padding-left: ${spacing('12')};
  `}

  ${mq({ gte: 'xl' })`
    padding-left: ${spacing('15')};
  `}
`
