import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing } = selectors

export const StyledMastheadMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: 100%;
  padding: 0 ${spacing('6')};

  ${mq({ gte: 'm' })`
    &&& {
      display: none;
    }
  `}
`
