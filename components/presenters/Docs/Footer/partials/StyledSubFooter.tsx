import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { getColorWithOpacity } from '../../../../helpers'

const { color, mq, spacing, zIndex } = selectors

export const StyledSubFooter = styled.div`
  display: flex;
  align-items: center;
  background-color: ${getColorWithOpacity(color('neutral', '600'))};
  color: ${color('neutral', '100')};
  height: 265px;
  padding: 0 ${spacing('12')};

  & > div {
    text-align: center;
    width: 100%;
    z-index: ${zIndex('overlay', 1)};

    ${mq({ gte: 's' })`
      text-align: unset;
    `}
  }

  ${mq({ gte: 's' })`
    height: 205px;
  `}
`
