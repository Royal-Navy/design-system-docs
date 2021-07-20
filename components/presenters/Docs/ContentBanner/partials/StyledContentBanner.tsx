import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, mq } = selectors

export const StyledContentBanner = styled.div`
  display: inline-flex;
  width: 100vw;
  align-items: flex-start;
  justify-content: left;
  background-color: ${color('action', '100')};
  padding: ${spacing('9')};

  ${mq({ gte: 's' })`
    align-items: center;
    width: auto;
    max-width: 670px;
    border-radius: 4px;
  `}

  svg {
    width: auto;
    height: 24px;
    margin-right: ${spacing('9')};

    ${mq({ gte: 's' })`
      height: 38px;
    `}
  }
`
