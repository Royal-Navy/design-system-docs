import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledCTA = styled.div`
  display: flex;
  margin: ${spacing('4')};

  > *:first-of-type {
    margin-right: ${spacing('5')};
  }

  > *:last-of-type {
    margin-left: ${spacing('5')};
  }
`
