import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledBody = styled.div`
  background-color: ${color('neutral', '000')};
  padding: ${spacing('8')} ${spacing('8')} ${spacing('8')} ${spacing('10')};
`
