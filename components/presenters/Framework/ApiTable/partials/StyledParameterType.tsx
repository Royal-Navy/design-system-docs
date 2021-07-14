import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledParameterType = styled.span`
  background-color: ${color('supa', '500')};
  font-size: ${fontSize('xs')};
  font-weight: 700;
  color: ${color('neutral', 'white')};
  border-radius: 2px;
  line-height: 1;
  text-transform: uppercase;
  margin-left: ${spacing('4')};
  padding: ${spacing('1')} ${spacing('2')};
`
