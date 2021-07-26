import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, mq, spacing } = selectors

export const StyledCopyright = styled.div`
  align-items: center;
  margin-top: ${spacing('6')};

  & > p {
    font-size: ${fontSize('base')};
    margin-bottom: ${spacing('6')};
  }

  & > span {
    display: block;
    font-size: ${fontSize('base')};
  }

  ${mq({ gte: 's' })`
    margin-top: ${spacing('12')};
    display: flex;
    justify-content: space-between;
  `}
`
