import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledNavSection = styled.section`
  margin: ${spacing('10')} ${spacing('6')} ${spacing('8')};
  padding-bottom: ${spacing('3')};
  border-bottom: 1px solid ${color('neutral', '100')};

  &:last-child {
    border-bottom: none;
    margin-bottom: unset;
  }
`
