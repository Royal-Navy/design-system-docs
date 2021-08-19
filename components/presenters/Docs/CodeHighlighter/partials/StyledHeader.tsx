import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledHeader = styled.header`
  position: relative;
  padding: ${spacing('8')};
  max-height: 20rem;
  overflow: scroll;
  background-color: ${color('neutral', 'white')};
  margin-bottom: ${spacing('4')};
  border-radius: 4px;
  border: 1px solid ${color('neutral', '100')};
`
