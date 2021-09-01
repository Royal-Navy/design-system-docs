import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { StyledButton } from '../../Button/partials/StyledButton'

const { color, spacing, mq } = selectors

export const StyledCard = styled.article`
  display: inline-block;
  background-color: ${color('neutral', '600')};
  border-radius: 15px;
  color: ${color('neutral', 'white')};
  padding: ${spacing('10')} ${spacing('13')};
  margin-bottom: ${spacing('4')};
  width: 100%;
  text-align: center;

  p {
    margin: ${spacing('6')} 0;
    font-weight: 400;
    color: ${color('neutral', '100')};
    line-height: 1.6;
  }

  ${mq({ gte: 'l' })`
    text-align: left;
    padding: ${spacing('10')} ${spacing('10')};
    align-items: flex-start;
    justify-content: flex-start;

    p {
      text-align: left;
    }
  `}
`
