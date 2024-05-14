import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { getColorWithOpacity } from '../../../../helpers'

const { fontSize, color } = selectors

export const StyledTitle = styled.span`
  font-size: ${fontSize('xxl')};
  font-weight: 700;
  text-shadow: 0px 1px 2px ${getColorWithOpacity(color('neutral', 'black'))};
`
