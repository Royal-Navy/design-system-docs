import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing, color } = selectors

export const StyledBody = styled.section`
  border-radius: 4px;
  position: relative;
  background-color: ${color('neutral', '700')};
  overflow: hidden;
  padding: ${spacing('12')} ${spacing('4')} 0;
`
