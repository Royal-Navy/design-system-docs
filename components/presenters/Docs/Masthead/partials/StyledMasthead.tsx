import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, shadow, mq } = selectors

interface StyledMastheadProps {
  $isOpen?: boolean
}

export const StyledMasthead = styled.header<StyledMastheadProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color('neutral', 'white')};
  height: 48px;
  padding: 0 ${spacing('10')};
  box-shadow: ${shadow('2')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  ${mq({ gte: 's' })`
    padding: 0 ${spacing('13')};
  `}

  ${mq({ gte: 'm' })`
    height: 64px;
  `}

  div {
    display: inline-flex;
    align-items: center;
  }

  > div:first-of-type svg {
    margin-right: ${spacing('2')};
    height: 22px;
    width: auto;

    ${mq({ gte: 'm' })`
      height: auto;
    `}
  }

  &::before {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    content: '';
    height: 100vh;
    width: 100vw;
    background-color: rgba(000, 000, 000, 0.25);
    pointer-events: none;

    ${mq({ gte: 'm' })`
      display: none;
    `}
  }

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    &::before {
      display: none;
    }
  `}
`
