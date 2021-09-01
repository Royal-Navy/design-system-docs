import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledCTA = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 16px;

  > * {
    flex: 1;
  }
`
