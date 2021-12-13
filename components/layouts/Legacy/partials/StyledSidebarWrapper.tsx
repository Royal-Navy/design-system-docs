import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { mq, spacing } = selectors

export const StyledSidebarWrapper = styled.div`
  display: none;
  padding: ${spacing('4')};

  ${mq({ gte: 's' })`
    display: block;
  `}
`
