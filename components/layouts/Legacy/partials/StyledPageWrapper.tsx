import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledPageWrapper = styled.div`
  background-color: ${color('neutral', '000')};
`
