import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledSidebar } from './StyledSidebar'

interface StyledFrameProps {
  $isOpen?: boolean
}

const { mq } = selectors

export const StyledFrame = styled.aside<StyledFrameProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  transition: all 0.2s;
  pointer-events: none;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    transition: all 0.2s;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;

    ${mq({ gte: 'm' })`
      opacity: 0;
    `}
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      &::before {
        opacity: 1;

        ${mq({ gte: 'm' })`
        opacity: 0;
      `}
      }

      ${StyledSidebar} {
        transform: translate3d(0, 0, 0);
      }
    `}

  ${mq({ gte: 'm' })`
    width: 300px;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  `}
`
