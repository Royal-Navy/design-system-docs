import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing, mq } = selectors

export const StyledFilename = styled.span`
  display: block;
  font-weight: 400;
  color: ${color('neutral', '200')};
  padding: ${spacing('12')} ${spacing('12')} 0 ${spacing('10')};

  ${mq({ gte: 's' })`
    padding-left: ${spacing('14')};
  `}

  ${mq({ gte: 'xl' })`
    padding-left: ${spacing('12')};
  `}
`
