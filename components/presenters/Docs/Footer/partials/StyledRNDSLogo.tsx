import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ReactComponent as RNDSLogo } from '../../../../../public/RNDSLogo.svg'

const { color } = selectors

export const StyledRNDSLogo = styled(RNDSLogo)`
  & > g > path:nth-child(2) {
    fill: ${color('neutral', 'white')};
  }
`
