import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing, fontSize, color } = selectors

export const StyledContent = styled.div`
  flex: 1;
  padding: ${spacing('12')} ${spacing('10')};

  ${mq({ gte: 's' })`
    padding: ${spacing('12')} 0;
  `}

  h2 {
    font-weight: 700;
    font-size: ${fontSize('xxl')};
    line-height: 2;
    color: ${color('neutral', '500')};
    margin-top: ${spacing('12')};
    margin-bottom: ${spacing('4')};
  }

  p {
    font-size: ${fontSize('m')};
    color: ${color('neutral', '500')};
    line-height: 1.75;
    margin: ${spacing('4')} 0;
  }

  ol {
    margin: ${spacing('8')} 0;
    padding: 0 ${spacing('8')};
  }

  li {
    margin: ${spacing('4')} 0;
  }

  code {
    background-color: ${color('neutral', '500')};
    border-radius: 3px;
    color: ${color('neutral', 'white')};
    font-weight: 500;
    padding: 2px 0.5rem;
  }
`
