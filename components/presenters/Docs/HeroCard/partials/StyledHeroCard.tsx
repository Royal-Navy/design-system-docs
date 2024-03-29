import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { HeroCardVariantType } from '..'

const { spacing, color, mq } = selectors

export const secondaryBackgroundColor = '#4148b6'

function getVariantStyles(variant: HeroCardVariantType) {
  const HERO_CARD_VARIANT_STYLES = {
    primary: css`
      background-color: ${color('action', '600')};
    `,
    secondary: css`
      background-color: ${secondaryBackgroundColor};
    `,
  }

  return HERO_CARD_VARIANT_STYLES[variant] || HERO_CARD_VARIANT_STYLES.primary
}

export const StyledHeroCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${color('neutral', 'white')};
  padding: ${spacing('12')};

  ${({ $variant }) => getVariantStyles($variant)};

  ${mq({ gte: 'm' })`
    display: inline-flex;
    border-radius: 15px;
  `}

  ${mq({ gte: 'xl' })`
    text-align: left;
    align-items: flex-start;
  `}
`
