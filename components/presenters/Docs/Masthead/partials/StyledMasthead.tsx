import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, shadow, mq } = selectors

export const StyledMasthead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 ${spacing('10')};
  box-shadow: ${shadow('2')};

  ${mq({ gte: 's' })`
    padding: 0 ${spacing('13')};
  `}

  ${mq({ gte: 'm' })`
    height: 64px;
  `}

  div {
    display: inline-flex;
    align-items: center;
  }

  div:first-of-type svg {
    margin-right: ${spacing('2')};
    height: 22px;
    width: auto;

    ${mq({ gte: 'm' })`
      height: auto;
    `}
  }
`
