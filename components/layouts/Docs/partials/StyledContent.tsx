import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing } = selectors

export const StyledContent = styled.div`
  flex: 1;
  padding: ${spacing('12')} ${spacing('10')};

  ${mq({ gte: 's' })`
    padding: ${spacing('12')} 0;
  `}
`
