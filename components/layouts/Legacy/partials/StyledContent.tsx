import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, spacing, fontSize, color } = selectors

export const StyledContent = styled.div`
  flex: 1;
  padding: ${spacing('12')} ${spacing('10')};

  ${mq({ gte: 's' })`
    padding: ${spacing('12')} 0;
  `}

  h1,
  h2 {
    font-weight: 700;
    font-size: ${fontSize('xxl')};
    line-height: 1.5;
    margin-top: ${spacing('12')};
    margin-bottom: ${spacing('8')};
  }

  h3 {
    font-size: ${fontSize('xl')};
    margin-top: ${spacing('12')};
    margin-bottom: ${spacing('6')};
    font-weight: 600;
  }

  h4 {
    margin-top: ${spacing('12')};
    margin-bottom: ${spacing('4')};
    font-weight: bold;
  }

  hr {
    margin: ${spacing('14')} 0;
    height: 1px;
    background-color: ${color('neutral', '100')};
    border: unset;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${color('neutral', '700')};
  }

  p {
    font-size: ${fontSize('m')};
    color: ${color('neutral', '500')};
    line-height: 1.75;
    margin: ${spacing('8')} 0 ${spacing('4')} 0;
    max-width: 670px;

    ${mq({ gte: 'xl' })`
      max-width: 740px;
    `}

    + ul {
      margin-top: 0;
    }

    > code {
      background-color: ${color('neutral', '100')};
      font-weight: bold;
      padding: 3px 8px 4px;
    }
  }

  ol {
    margin: ${spacing('8')} 0;
    padding: 0 ${spacing('8')};
  }

  li {
    margin: 0 0 ${spacing('2')} 0;
    > p {
      margin-top: 0;
      + p {
        margin-top: ${spacing('4')};
      }
    }
  }

  code {
    font-size: ${fontSize('base')};
    background-color: ${color('neutral', '100')};
    border-radius: 3px;
    color: ${color('neutral', '500')};
    font-weight: 400;
    padding: 4px 8px;
  }
`
