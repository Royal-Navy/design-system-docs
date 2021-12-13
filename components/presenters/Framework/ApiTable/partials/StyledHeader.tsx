import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

export const StyledHeader = styled.div`
  padding: ${spacing('8')} ${spacing('7')} ${spacing('8')} ${spacing('10')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
