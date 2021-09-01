import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import NelsonLogoClip from '../../../../../public/NelsonLogoClip.svg'

const { mq } = selectors

export const StyledNelsonLogoClip = styled(NelsonLogoClip)`
  position: absolute;
  top: -40px;
  right: 0;
  transform: scale(1.08);
  height: 600px;

  ${mq({ gte: 's' })`
    height: 503px;
    transform: scale(1.4);
    right: 120px;
    top: -10px;
  `};
`
