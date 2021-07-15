import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledBodyRowItem = styled.div`
  width: 120px;
  text-transform: uppercase;
  font-size: ${fontSize('s')};
  color: ${color('neutral', '300')};
  font-weight: 600;
  margin-top: ${spacing('4')};
  transform: translateY(-1px);
`
