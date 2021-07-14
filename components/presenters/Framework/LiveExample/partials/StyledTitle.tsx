import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledTitle = styled.span`
  display: block;
  font-weight: 400;
  color: ${color('neutral', '200')};
  padding: 0 ${spacing('12')} ${spacing('8')} 0;
`
