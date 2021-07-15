import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

interface StyledItemProps {
  $isActive?: boolean
}

export const StyledItem = styled.li<StyledItemProps>`
  border-left: 2px solid ${color('neutral', '100')};
  color: ${color('neutral', '400')};
  cursor: pointer;
  padding-left: 12px;
  font-size: ${fontSize('base')};
  line-height: 2;

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-left: 4px solid ${color('neutral', '300')};
      padding-left: 10px;
    `}
`
