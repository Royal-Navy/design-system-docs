import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledNavLinkProps {
  $isCode?: boolean
}

const { spacing, color, fontSize } = selectors

export const StyledNavLink = styled.a<StyledNavLinkProps>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: ${spacing('2')} solid transparent;
  padding: ${spacing('4')} ${spacing('12')} ${spacing('4')} calc(2rem - 4px);
  color: ${color('neutral', 'white')};
  font-weight: normal;
  font-size: ${fontSize('m')};
  z-index: 1;

  &:hover,
  &.is-active {
    border-left-color: ${color('action', '400')};
    color: ${color('neutral', 'white')};
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${color('action', '600')};
      opacity: 0.2;
      z-index: -1;
    }
  }

  ${({ $isCode }) =>
    $isCode &&
    css`
      font-weight: 300;
      font-size: ${fontSize('base')};
      font-family: 'Fira Code', 'Courier New', Courier, monospace;
      padding-top: ${spacing('5')};
    `}
`
