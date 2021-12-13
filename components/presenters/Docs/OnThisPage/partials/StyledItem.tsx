import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

interface StyledItemProps {
  $isActive?: boolean
}

export const StyledItem = styled.li<StyledItemProps>`
  border-left: 2px solid transparent;
  color: ${color('neutral', '400')};
  cursor: pointer;
  padding: 0 12px;
  margin-top: 12px;
  margin-left: -2px;
  font-size: ${fontSize('base')};
  line-height: 1.3;

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-left: 4px solid ${color('neutral', '400')};
      padding-left: 10px;
      font-weight: 600;
      color: ${color('neutral', '500')};
    `}
`
