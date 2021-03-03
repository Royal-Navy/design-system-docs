import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq } = selectors

export const StyledContentPanel = styled.section`
  padding-top: 60px;
  margin-top: -60px;
  display: flex;
  flex-direction: column;

  ${mq({ gte: 'xl' })`
    align-items: stretch;
    justify-content: stretch;
    flex-direction: row;
  `}
`
