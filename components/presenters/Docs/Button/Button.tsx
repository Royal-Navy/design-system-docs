import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { StyledButton } from './partials/StyledButton'

export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  QUATERNARY: 'quaternary',
} as const

export type ButtonVariantType =
  | typeof BUTTON_VARIANT.PRIMARY
  | typeof BUTTON_VARIANT.SECONDARY
  | typeof BUTTON_VARIANT.TERTIARY
  | typeof BUTTON_VARIANT.QUATERNARY

export interface ButtonProps extends ComponentWithClass {
  variant?: ButtonVariantType
  href?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = BUTTON_VARIANT.PRIMARY,
  ...rest
}) => {
  return (
    <StyledButton {...rest} $variant={variant}>
      {children}
    </StyledButton>
  )
}

Button.displayName = 'Button'
