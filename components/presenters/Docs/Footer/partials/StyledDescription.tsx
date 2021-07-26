import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing } = selectors

export const StyledDescription = styled.p`
  margin-top: ${spacing('4')};
  text-align: center;

  ${mq({ gte: 's' })`
    text-align: unset;
    width: 614px;
  `}
`
