import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledMastheadMenuItem = styled.li`
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-right: ${spacing('13')};
  overflow: visible;

  &:last-of-type {
    padding-right: 0;
  }

  > svg {
    width: 20px;
    height: auto;
    color: #748899;
    cursor: pointer;
  }
`
