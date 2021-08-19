import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color, fontSize } = selectors

export const StyledCopyButton = styled.button`
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: ${spacing('4')};
  right: ${spacing('4')};
  padding: ${spacing('4')};
  border: none;
  border-radius: 3px;
  background: none;
  color: ${color('neutral', '500')};
  font-size: ${fontSize('base')};
  z-index: 1;

  svg {
    margin-right: ${spacing('2')};
  }
`
