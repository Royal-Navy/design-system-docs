import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledTitle = styled.span`
  color: ${color('neutral', '500')};
  font-size: ${fontSize('m')};
  font-weight: 700;
  line-height: 1.5;
`
