import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

export const StyledTitle = styled.span`
  display: inline-block;
  padding-top: ${spacing('px')};
  margin-right: ${spacing('4')};
`
