import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, mq } = selectors

export const StyledPageWrapper = styled.div`
  padding-top: 92px;
  background-color: ${color('neutral', '000')};

  ${mq({ gte: 'm' })`
    padding-top: 107px;
  `}
`
