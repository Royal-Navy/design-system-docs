import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, shadow } = selectors

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 28px;
  border: 1px solid ${color('neutral', '200')};
  background-color: ${color('neutral', 'white')};
  border-radius: 4px;
  padding: 0;
  box-shadow: ${shadow('2')};
  cursor: pointer;

  svg {
    fill: ${color('neutral', '400')};
  }
`
