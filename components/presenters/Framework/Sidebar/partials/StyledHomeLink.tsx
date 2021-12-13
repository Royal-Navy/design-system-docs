import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing } = selectors

export const StyledHomeLink = styled.a`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${color('neutral', '800')};
  color: ${color('action', '400')};
  padding: 0 ${spacing('12')};
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${color('neutral', '600')};
    color: ${color('neutral', 'white')};
    text-decoration: none;
  }
`
