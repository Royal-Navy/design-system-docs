import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, mq } = selectors

export const StyledCodeBlock = styled.div`
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
      font-family: 'Fira Code', 'Courier New', Courier, monospace;
    }
  }
`
