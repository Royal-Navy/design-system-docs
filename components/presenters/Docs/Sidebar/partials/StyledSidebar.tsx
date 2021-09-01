import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, shadow, spacing, mq } = selectors

export const StyledSidebar = styled.aside`
  width: 248px;
  background-color: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '100')};
  border-radius: 8px;
  box-shadow: ${shadow('2')};
  padding: ${spacing('6')};
  ${mq({ gte: 'xl' })`
    width: 316px;
  `}
`
