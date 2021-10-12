import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq } = selectors

export const StyledMastheadMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: 100%;
  padding: 0 1.5rem;
  margin-bottom: 1rem;

  > svg {
    width: auto;
    height: 25px;
  }

  ${mq({ gte: 'm' })`
    &&& {
      display: none;
    }
  `}
`
