import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { getColorWithOpacity } from '../../../../helpers'

const { fontSize, spacing, color, mq } = selectors

export const StyledDescription = styled.p`
  font-size: ${fontSize('m')};
  font-weight: 400;
  line-height: 1.5;
  margin: ${spacing('8')} 0;
  color: ${color('neutral', 'white')};
  text-shadow: 0px 1px 2px ${getColorWithOpacity(color('neutral', 'black'))};
  max-width: 550px;

  ${mq({ gte: 'l' })`
    font-size: 18px;
    line-height: 1.667;
  `}
`
