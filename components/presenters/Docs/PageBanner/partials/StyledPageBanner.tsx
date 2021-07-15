import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing, mq } = selectors

export const StyledPageBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 43px;
  background-color: ${color('neutral', '500')};
  color: ${color('neutral', 'white')};
  font-size: 15px;
  padding: 0 ${spacing('10')};

  ${mq({ gte: 'm' })`
    padding: 0 ${spacing('13')};
  `}

  a {
    color: ${color('neutral', 'white')};
    text-decoration: underline;
    display: none;

    ${mq({ gte: 'xs' })`
      display: inline;
    `}

    &:hover {
      text-decoration: none;
    }
  }
`
