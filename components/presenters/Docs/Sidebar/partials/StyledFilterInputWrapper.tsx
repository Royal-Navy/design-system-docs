import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

interface StyledFilterInputWrapperProps {
  $hasFocus: boolean
}

export const StyledFilterInputWrapper = styled.div<StyledFilterInputWrapperProps>`
  position: relative;
  flex-grow: 1;
  order: 1;
  display: flex;
  border: 2px solid transparent;
  border-radius: 8px;

  ${({ $hasFocus }) =>
    $hasFocus &&
    css`
      border-color: ${color('neutral', '200')};
    `};
`
