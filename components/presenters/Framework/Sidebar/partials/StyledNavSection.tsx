import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing, color } = selectors

export const StyledNavSection = styled.section`
  padding: ${spacing('12')} 0;
  border-bottom: 4px solid ${color('neutral', '500')};

  &:last-child {
    border-bottom: none;
  }
`
