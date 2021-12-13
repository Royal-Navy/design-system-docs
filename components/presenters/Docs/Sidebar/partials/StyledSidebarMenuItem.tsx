import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledNavLink } from './StyledNavLink'
import { StyledIconNavLink } from './StyledIconNavLink'

interface StyledSidebarMenuItemProps {
  $isActive?: boolean
}

const { color } = selectors

export const StyledSidebarMenuItem = styled.li<StyledSidebarMenuItemProps>`
  display: flex;
  align-items: center;
  list-style: none;
  margin: unset;
  padding: unset;
  height: 36px;
  display: block;

  ${({ $isActive }) =>
    $isActive &&
    css`
      ${StyledNavLink}, ${StyledIconNavLink} {
        color: ${color('neutral', 'white')};
        background-color: ${color('neutral', '500')};
      }
    `}
`
