import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

export const StyledItems = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid ${color('neutral', '100')};
`
