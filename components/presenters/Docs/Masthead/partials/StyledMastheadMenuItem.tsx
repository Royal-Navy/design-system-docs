import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, mq, color } = selectors

interface StyledMastheadMenuItemProps {
  $hasChildren?: boolean
}

export const StyledMastheadMenuItem = styled.li<StyledMastheadMenuItemProps>`
  position: relative;
  overflow: visible;
  height: 56px;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: ${spacing('6')} ${spacing('11')};
  }

  ${({ $hasChildren }) =>
    $hasChildren &&
    css`
      height: auto;
      border-top: 1px solid ${color('neutral', '100')};
      border-bottom: 1px solid ${color('neutral', '100')};
    `}

  > svg {
    width: 20px;
    height: auto;
    color: #748899;
    cursor: pointer;
  }

  ${mq({ gte: 'm' })`
    display: inline-flex;
    height: auto;
    padding-right: ${spacing('13')};
    border-top: unset;
    border-bottom: unset;
    flex-direction: row;

    &:last-of-type {
      padding-right: 0;
    }

    > div {
      padding: unset;
    }
  `}
`
