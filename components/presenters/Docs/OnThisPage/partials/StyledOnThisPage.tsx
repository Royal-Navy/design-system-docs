import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, shadow, spacing } = selectors

export const StyledOnThisPage = styled.aside`
  position: sticky;
  top: ${spacing('12')};
  padding: ${spacing('7')} ${spacing('9')} ${spacing('10')};
  border: 1px solid ${color('neutral', '100')};
  border-radius: 8px;
  background-color: ${color('neutral', 'white')};
  box-shadow: ${shadow('1')};
  width: 230px;
`
