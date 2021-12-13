import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, mq, spacing } = selectors

interface StyledItemProps {
  $backgroundColor: string
  $isDark: boolean
}

export const StyledColour = styled.div<StyledItemProps>`
  padding: ${spacing('14')} ${spacing('4')} ${spacing('4')};
  width: 25%;

  ${mq({ gte: 'm' })`
    width: 20%;
  `}

  ${({ $backgroundColor, $isDark }) => css`
    background-color: ${$backgroundColor};
    color: ${color('neutral', $isDark ? 'white' : '600')}};
  `}
`
