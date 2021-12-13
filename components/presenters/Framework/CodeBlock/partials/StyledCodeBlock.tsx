import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing, mq } = selectors

export const StyledCodeBlock = styled.div`
  background-color: ${color('neutral', '700')};
  width: 100%;

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
