import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledOnThisPage = styled.div`
  padding: ${spacing('7')} ${spacing('9')} ${spacing('10')};
  border: 1px solid ${color('neutral', '100')};
  border-radius: 8px;
  color: ${color('neutral', 'white')};
  width: 230px;
`
