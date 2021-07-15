import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledHeader = styled.header`
  padding: ${spacing('12')};
  border-bottom: 8px solid ${color('neutral', '800')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`
