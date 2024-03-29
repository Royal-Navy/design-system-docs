import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

export const StyledParameters = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  border-radius: 4px;
  padding: 0;
  margin: ${spacing('6')} 0 ${spacing('4')} -4px;
`
