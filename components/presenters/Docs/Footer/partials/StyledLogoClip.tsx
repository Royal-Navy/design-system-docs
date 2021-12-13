import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import FooterLogoClip from '../../../../../public/FooterLogoClip.svg'

const { mq } = selectors

export const StyledLogoClip = styled(FooterLogoClip)`
  position: absolute;
  top: -30px;
  right: 0;
  transform: scale(1.08);
  height: 600px;

  ${mq({ gte: 's' })`
    height: 503px;
    transform: scale(1.4);
    top: -10px;
  `};
`
