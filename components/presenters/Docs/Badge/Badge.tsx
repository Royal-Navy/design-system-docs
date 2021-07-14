import React from 'react'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'

import { StyledBadge } from './partials/StyledBadge'
import { BADGE_VARIANT } from './constants'

export type BadgeVariantType =
  | typeof BADGE_VARIANT.LIGHT
  | typeof BADGE_VARIANT.DARK

export interface BadgeProps extends ComponentWithClass {
  variant?: BadgeVariantType
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = BADGE_VARIANT.LIGHT,
}) => {
  return <StyledBadge $variant={variant}>{children}</StyledBadge>
}

Badge.displayName = 'Badge'
