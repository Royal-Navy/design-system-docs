import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, mq } = selectors

export const StyledCard = styled.article`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${color('neutral', '600')};
  border-radius: 15px;
  color: ${color('neutral', 'white')};
  padding: ${spacing('10')} ${spacing('13')};

  p {
    margin: ${spacing('6')} 0;
    font-weight: 400;
    color: ${color('neutral', '100')};
    line-height: 1.6;
    text-align: center;
  }

  ${mq({ gte: 'l' })`
    align-items: flex-start;
    justify-content: space-between;

    p {
      text-align: left;
    }
  `}
`
