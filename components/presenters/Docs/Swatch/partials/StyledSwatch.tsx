import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

export const StyledSwatch = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 100%;
  margin-top: ${spacing('10')};
`
