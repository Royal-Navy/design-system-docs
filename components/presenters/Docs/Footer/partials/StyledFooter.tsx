import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

export const StyledFooter = styled.div`
  background-color: ${color('neutral', '500')};
  color: ${color('neutral', '100')};
  height: 503px;
`
