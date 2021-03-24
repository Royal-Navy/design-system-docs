import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq, color, spacing, fontSize } = selectors

export const StyledContentPanel = styled.article`
  padding-top: 60px;
  margin-top: -60px;
  display: flex;
  flex-direction: column;

  ${mq({ gte: 'xl' })`
    align-items: stretch;
    justify-content: stretch;
    flex-direction: row;
  `}

  position: relative;
  z-index: 0;

  a {
    transition: all 0.2s;
    text-decoration: underline;
    color: ${color('action', '500')};

    &:hover {
      color: ${color('supa', '500')};
    }
  }

  pre,
  pre[class*='language-'] {
    border-radius: 0;
    background-color: ${color('neutral', '800')};
    max-width: 100%;
    overflow-x: scroll;
    margin: 0;
    padding: ${spacing('12')} ${spacing('14')} ${spacing('12')} ${spacing('10')};

    ${mq({ gte: 's' })`
      padding-left: ${spacing('14')};
    `}

    ${mq({ gte: 'xl' })`
      padding-left: ${spacing('12')};
    `}

    code {
      font-weight: 200;
      line-height: 1;
      font-size: ${fontSize('base')};
      font-family: 'Fira Code', 'Courier New', Courier, monospace;
    }
  }

  p,
  li {
    margin-bottom: ${spacing('4')};

    code:not(.rn-fw-api-value-name) {
      font-weight: 500;
      font-size: ${fontSize('m')};
      color: ${color('neutral', '500')};
      background-color: ${color('neutral', '000')};
      padding: ${spacing('1')} ${spacing('3')} 0 ${spacing('3')};
    }

    ul {
      margin-top: ${spacing('4')};
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    font-weight: 500;
    color: ${color('neutral', '700')};
    margin-bottom: ${spacing('10')};
  }

  h2 {
    letter-spacing: -0.4px;
    font-size: ${fontSize('xxl')};
  }

  ol,
  ul,
  p {
    font-weight: 400;
    font-size: ${fontSize('m')};

    + p {
      margin-top: ${spacing('7')};
    }

    + h3 {
      margin-top: ${spacing('12')};
    }

    + ul,
    + ol {
      margin-top: ${spacing('7')};
    }
  }
`
