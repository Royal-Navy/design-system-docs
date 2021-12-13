import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledButton } from './StyledButton'

const { mq } = selectors

export const StyledExpandButton = styled(StyledButton)`
  ${mq({ gte: 'm' })`
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
    box-shadow: unset;
  `}
`
