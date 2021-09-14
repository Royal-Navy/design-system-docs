import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledNavLink = styled.a`
  position: relative;
  display: block;
  /* width: 100%; */
  justify-content: center;
  flex-direction: column;
  color: ${color('neutral', '400')};
  font-weight: 500;
  font-size: ${fontSize('base')};
  padding: ${spacing('3')} ${spacing('4')};
  margin-left: -${spacing('4')};
  margin-right: -${spacing('4')};
  border-radius: 6px;

  &:hover {
    text-decoration: none;
    color: ${color('neutral', '500')};
    background-color: ${color('neutral', '100')};
  }
`
