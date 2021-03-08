import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, mq } = selectors

export const StyledFilename = styled.span`
  display: block;
  font-weight: 400;
  color: ${color('neutral', '200')};
  padding: 0 ${spacing('12')} ${spacing('8')} ${spacing('10')};

  ${mq({ gte: 's' })`
    padding-left: ${spacing('14')};
  `}

  ${mq({ gte: 'xl' })`
    padding-left: ${spacing('12')};
  `}
`
