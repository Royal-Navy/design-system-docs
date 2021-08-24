import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color, mq } = selectors

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 ${spacing('15')};

  &:first-of-type {
    padding-top: ${spacing('15')};
  }

  > p {
    font-size: 16px;
    color: ${color('neutral', '500')};
    line-height: 1.5;
    font-weight: 400;
    text-align: center;
    margin: 0 ${spacing('8')} ${spacing('8')};
    padding: 0 ${spacing('8')};
    max-width: 800px;

    &:first-of-type {
      margin-top: ${spacing('8')};
    }

    ${mq({ gte: 'm' })`
      font-size: 16px;
      line-height: 1.76;
      padding: 0 ${spacing('15')};
    `}

    ${mq({ gte: 'l' })`
      font-size: 20px;
    `}
  }
`
