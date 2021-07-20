import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing } = selectors

export const StyledCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing('12')};

  & > p,
  span {
    font-size: ${fontSize('base')};
  }
`
