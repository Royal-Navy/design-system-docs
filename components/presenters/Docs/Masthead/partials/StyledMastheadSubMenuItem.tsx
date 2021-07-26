import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, mq } = selectors

export const StyledMastheadSubMenuItem = styled.li`
  padding: ${spacing('3')} ${spacing('11')};

  ${mq({ gte: 'm' })`
    padding: ${spacing('6')};
  `}
`
