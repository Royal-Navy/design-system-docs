import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledButton } from './StyledButton'

const { mq } = selectors

export const StyledMenuButton = styled(StyledButton)`
  ${mq({ gte: 'm' })`
    display: none;
  `}
`
