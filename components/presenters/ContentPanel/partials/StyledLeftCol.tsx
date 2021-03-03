import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, mq } = selectors

export const StyledLeftCol = styled.div`
  border-top: 4px solid ${color('neutral', '000')};
  background-color: ${color('neutral', 'white')};
  padding: ${spacing('12')} ${spacing('10')};
  width: 100%;

  ${mq({ gte: 's' })`
    padding: ${spacing('14')};
  `}

  ${mq({ gte: 'xl' })`
    width: 50%;
  `}

  @media only screen and (min-width: 1900px) {
    width: 900px;
    padding: ${spacing('15')};
  }

  > * {
    ${mq({ gte: 's' })`
      max-width: 750px;
    `}

    ${mq({ gte: 'xl' })`
      max-width: 100%;
    `}
  }
`
