import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

export const StyledLogo = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${spacing('2')};
`
