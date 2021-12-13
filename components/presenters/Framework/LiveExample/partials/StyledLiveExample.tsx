import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { mq, spacing } = selectors

export const StyledLiveExample = styled.div`
  padding: 0 ${spacing('10')} ${spacing('10')};

  ${mq({ gte: 's' })`
    padding: 0 ${spacing('14')} ${spacing('12')};
  `}

  ${mq({ gte: 'xl' })`
    padding: 0 ${spacing('12')};
  `}
`
