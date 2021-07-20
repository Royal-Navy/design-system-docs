import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledFooterLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 298px;
  padding-left: ${spacing('12')};
`
