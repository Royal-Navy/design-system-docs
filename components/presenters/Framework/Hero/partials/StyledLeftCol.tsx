import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { LeftCol } from '../../ContentPanel'

const { spacing, mq } = selectors

export const StyledLeftCol = styled(LeftCol)`
  padding: ${spacing('14')} ${spacing('10')};

  ${mq({ gte: 's' })`
    padding:
      ${spacing('16')}
      ${spacing('14')}
      ${spacing('15')}
      ${spacing('14')};
  `}

  @media only screen and (min-width: 1900px) {
    padding: ${spacing('17')} ${spacing('15')};
  }
`
