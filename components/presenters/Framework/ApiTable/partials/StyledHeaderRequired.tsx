import { Badge } from '@royalnavy/react-component-library'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledHeaderRequired = styled(Badge)`
  margin-left: ${spacing('4')};
`
