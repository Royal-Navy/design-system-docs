import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ReactComponent as NelsonLogoClip } from '../../../../../public/NelsonLogoClip.svg'

const { mq } = selectors

export const StyledNelsonLogoClip = styled(NelsonLogoClip)`
  position: absolute;
  top: 0;
  right: 0;
  transform: scale(1.08);
  transform-origin: top left;

  ${mq({ gte: 's' })`
    height: 503px;
    transform: scale(1);
  `};
`
