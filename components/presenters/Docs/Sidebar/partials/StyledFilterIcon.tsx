import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

export const { color, fontSize } = selectors

export const StyledFilterIcon = styled.div`
  background-color: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '200')};
  border-radius: 4px;
  width: 24px;
  height: 24px;
  color: ${color('neutral', '300')};
  font-size: ${fontSize('s')};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
`
