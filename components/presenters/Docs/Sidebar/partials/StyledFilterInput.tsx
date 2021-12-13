import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

function removeAutoFillBackground() {
  return css`
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-transition: background-color 9999s ease-out;
    }

    filter: none; // Firefox
  `
}

export const StyledFilterInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  border: 0;
  background: none;
  padding: 11px 38px 12px 14px;

  -webkit-tap-highlight-color: transparent;

  ${removeAutoFillBackground()}

  color: ${color('neutral', '600')};
  font-size: ${fontSize('m')};

  height: 39px;

  &:focus {
    outline: 0;
  }
`
