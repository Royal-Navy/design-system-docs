import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing } = selectors

export const StyledContainer = styled.div`
  padding-top: ${spacing('6')};
  max-width: 100%;

  ${mq({ gte: 's' })`
    display: flex;
    padding-top: unset;
  `}

  ${mq({ gte: 'xl' })`
    max-width: 1680px;
    margin: 0 auto;
  `}
`
