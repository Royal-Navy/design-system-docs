import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledNavLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: ${spacing('2')} solid transparent;
  padding: ${spacing('4')} ${spacing('12')} ${spacing('4')} calc(2rem - 4px);
  color: ${color('neutral', 'white')};
  font-weight: 300;
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
`
