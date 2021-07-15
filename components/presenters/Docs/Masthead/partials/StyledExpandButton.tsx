import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledExpandButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: ${spacing('2')};
  cursor: pointer;
`
