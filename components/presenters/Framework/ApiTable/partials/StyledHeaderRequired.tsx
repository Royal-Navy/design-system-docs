import { Badge } from '@defencedigital/react-component-library'
import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledHeaderRequired = styled(Badge)`
  margin-left: ${spacing('4')};
`
