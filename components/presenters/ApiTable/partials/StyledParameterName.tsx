import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize } = selectors

export const StyledParameterName = styled.code`
  background: none;
  font-size: ${fontSize('base')};
  font-weight: 400;
  padding: 0;
`
