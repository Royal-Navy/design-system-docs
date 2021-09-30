import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, shadow, spacing, mq } = selectors

export const StyledOnThisPage = styled.aside`
  position: sticky;
  padding: ${spacing('7')} ${spacing('9')} ${spacing('10')};
  border: 1px solid ${color('neutral', '100')};
  border-radius: 8px;
  background-color: ${color('neutral', 'white')};
  box-shadow: ${shadow('1')};
  top: 150px;
  width: 200px;
  ${mq({ gte: 'l' })`
    top: 170px;
    width: 230px;
  `}
`
