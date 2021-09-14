import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing } = selectors

export const StyledBody = styled.div`
  padding-top: ${spacing('6')};
  max-width: 100%;
  padding-top: 0;
`
