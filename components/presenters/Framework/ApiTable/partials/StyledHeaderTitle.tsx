import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize } = selectors

export const StyledHeaderTitle = styled.h1`
  font-size: ${fontSize('m')};
  margin: 0;
`
