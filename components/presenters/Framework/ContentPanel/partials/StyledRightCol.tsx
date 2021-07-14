import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, mq } = selectors

export const StyledRightCol = styled.div`
  background-color: ${color('neutral', '700')};
  padding-top: ${spacing('8')};
  width: 100%;

  ${mq({ gte: 'xl' })`
    border-top: 4px solid ${color('neutral', '600')};
    width: 50%;
    padding-top: ${spacing('15')};
    padding-bottom: ${spacing('13')};
  `}

  @media only screen and (min-width: 1900px) {
    width: calc(100% - 900px);
  }

  &:empty {
    display: none;

    ${mq({ gte: 'xl' })`
      display: block;
    `}
  }
`
