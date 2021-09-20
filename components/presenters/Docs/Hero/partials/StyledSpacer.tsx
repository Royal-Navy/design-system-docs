import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledSpacer = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background-color: ${color('neutral', '300')};
  margin: 0 ${spacing('5')};
  display: inline-block;
  transform: translateY(-2px);
`
