import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ButtonVariantType } from '../Button'

interface StyledButtonProps {
  $variant: ButtonVariantType
}

const { spacing, fontSize, color, shadow } = selectors

function getVariantStyles($variant: ButtonVariantType) {
  const VARIANT_STYLES = {
    primary: css`
      background-color: ${color('action', '600')};
      color: ${color('neutral', 'white')};
    `,
    secondary: css`
      background-color: ${color('neutral', 'white')};
      color: ${color('action', '800')};
    `,
    tertiary: css`
      background-color: #edf2f7;
      color: ${color('neutral', '500')};
      box-shadow: none;
    `,
    quaternary: css`
      background-color: ${color('neutral', '400')};
      color: ${color('neutral', 'white')};
      padding: ${spacing('5')} ${spacing('8')};
      border-radius: 9px;
      font-weight: 600;
      box-shadow: none;
    `,
  }

  return VARIANT_STYLES[$variant] || VARIANT_STYLES.primary
}

export const StyledButton = styled.a<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 15px;
  text-align: center;
  padding: ${spacing('7')} ${spacing('11')};
  font-size: ${fontSize('m')};
  box-shadow: ${shadow('3')};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  ${({ $variant }) => getVariantStyles($variant)}
`