import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { mq, spacing } = selectors

export const StyledArticle = styled.article`
  display: flex;

  & > div:first-of-type {
    flex: 1;

    & > nav {
      padding: ${spacing('10')} ${spacing('10')} 0;

      ${mq({ gte: 's' })`
        padding: unset;
      `}
    }
  }
`
