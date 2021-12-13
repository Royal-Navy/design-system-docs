import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { BREAKPOINT_XXL } from '../../ContentPanel/constants'

const { mq, spacing, color } = selectors

export const StyledIllustration = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${color('neutral', '700')};

  ${mq({ gte: 'xl' })`
    border-top: 4px solid ${color('neutral', '600')};
    width: 50%;
    padding-top: ${spacing('15')};
    padding-bottom: ${spacing('13')};
  `}

  @media only screen and (min-width: ${BREAKPOINT_XXL}) {
    width: calc(100% - 900px);
  }

  ${mq({ gte: 'xl' })`
    padding-top: ${spacing('12')};
  `}

  &:empty {
    display: none;

    ${mq({ gte: 'xl' })`
      display: block;
    `}
  }

  svg {
    width: 100%;
    max-width: 670px;
    display: block;
  }
`
