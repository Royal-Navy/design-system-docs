import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledSidebarMenuItem = styled.li`
  list-style: none;
  margin: ${spacing('2')} 0 0 0;
  padding: 0;
`
