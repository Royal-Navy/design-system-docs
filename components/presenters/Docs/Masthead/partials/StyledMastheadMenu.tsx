import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledMastheadMenuProps {
  $isOpen?: boolean
}

const { mq, color, spacing, shadow } = selectors

export const StyledMastheadMenu = styled.nav<StyledMastheadMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${color('neutral', 'white')};
  width: 270px;
  height: 100vh;
  padding: ${spacing('6')} 0;
  box-shadow: ${shadow('3')};
  transition: all 0.15s;
  transform: translateX(0) cubic-bezier(0.52, 0.01, 0.5, 1.18);
  overflow-y: scroll;

  ${mq({ gte: 'm' })`
    overflow-y: unset;
  `}

  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  > ol {
    border-top: 1px solid ${color('neutral', '100')};
  }

  ${mq({ gte: 'm' })`
    display: inline-flex;
    position: relative;
    height: auto;
    width: auto;
    padding: unset;
    box-shadow: unset;

    ol {
      border: unset;
      display: inline-flex;
    }
  `}

  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      transform: translateX(-100%);

      ${mq({ gte: 'm' })`
        transform: unset;
        visibility: visible;
      `}
    `}
`
