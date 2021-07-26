import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledButton } from './StyledButton'

const { spacing, mq } = selectors

export const StyledExpandButton = styled(StyledButton)`
  ${mq({ gte: 'm' })`
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
    margin-left: ${spacing('2')};
    box-shadow: unset;
  `}
`
