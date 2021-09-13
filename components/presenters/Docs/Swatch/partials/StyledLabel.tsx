import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing } = selectors

export const StyledLabel = styled.span`
  font-size: ${fontSize('s')};
  font-weight: 500;
  width: 100%;
  display: block;

  &:first-child {
    margin-bottom: ${spacing('2')};
  }
`
