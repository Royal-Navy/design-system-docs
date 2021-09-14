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
      visibility: hidden;

      ${mq({ gte: 'm' })`
        visibility: visible;
      `}
    `}
`
