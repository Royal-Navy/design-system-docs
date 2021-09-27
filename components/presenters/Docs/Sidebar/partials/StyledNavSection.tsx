import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledNavSection = styled.section`
  margin: 0 ${spacing('6')};

  & + & {
    padding-top: ${spacing('4')};
    border-top: 1px solid ${color('neutral', '100')};
  }
`
