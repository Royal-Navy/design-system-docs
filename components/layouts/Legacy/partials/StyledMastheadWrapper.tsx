import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { zIndex } = selectors

export const StyledMastheadWrapper = styled.div`
  position: relative;
  z-index: ${zIndex('masthead', 1)};
`
