import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledNavSection } from './StyledNavSection'

const { spacing } = selectors

export const StyledFilter = styled.div`
  & + ${StyledNavSection} {
    margin-top: ${spacing('3')};
  }
`
