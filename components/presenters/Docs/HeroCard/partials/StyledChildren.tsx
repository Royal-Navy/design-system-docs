import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing } = selectors

export const StyledChildren = styled.div`
  display: none;

  ${mq({ gte: 'l' })`
    display: flex;
    margin-bottom: ${spacing('8')};
  `}
`
