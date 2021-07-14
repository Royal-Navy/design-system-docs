import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, fontSize, spacing, color } = selectors

export const StyledButton = styled.button`
  ${mq({ gte: 'm' })`
    display: none;
  `}

  line-height: 1;
  border-radius: 3px;
  font-size: ${fontSize('base')};
  padding: ${spacing('5')} ${spacing('5')};
  transition: background-color 0.3s;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    outline: none;
  }

  background-color: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '200')};
  padding: ${spacing('5')} ${spacing('5')};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${color('neutral', '100')};
  }
`
