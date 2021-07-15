import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

export const StyledCloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  color: #a3b3c0;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${color('neutral', 'white')};
  }
`
