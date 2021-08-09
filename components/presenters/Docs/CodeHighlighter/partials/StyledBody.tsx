import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledBody = styled.section`
  border-radius: 4px;
  position: relative;
  background-color: #f6f8fa;
  overflow: hidden;
  padding: ${spacing('12')} ${spacing('4')} 0;
`
