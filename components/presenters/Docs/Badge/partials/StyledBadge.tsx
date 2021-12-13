import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { BadgeVariantType } from '../Badge'

interface StyledBadgeProps {
  $variant: BadgeVariantType
}

const { color, spacing, fontSize } = selectors

function getVariantStyles($variant: BadgeVariantType) {
  const styles = {
    light: css`
      border: 1px solid ${color('neutral', '200')};
      color: ${color('neutral', '500')};
      background-color: ${color('neutral', 'white')};
    `,
    dark: css`
      border: 1px solid ${color('neutral', '300')};
      color: ${color('neutral', 'white')};
      background-color: ${color('neutral', '500')};
    `,
  }

  return styles[$variant] || styles.light
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  padding: ${spacing('3')} ${spacing('4')};
  margin: 0 ${spacing('2')};
  font-size: ${fontSize('s')};
  border-radius: 4px;

  ${({ $variant }) => getVariantStyles($variant)}
`
