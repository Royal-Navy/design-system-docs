import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledContentPanel } from '../../ContentPanel/partials/StyledContentPanel'
import { StyledLeftCol } from '../../ContentPanel/partials/StyledLeftCol'
import { StyledRightCol } from '../../ContentPanel/partials/StyledRightCol'

const { color } = selectors

export const StyledSection = styled.section`
  &:not(:first-of-type) {
    ${StyledContentPanel}:first-of-type {
      ${StyledLeftCol} {
        border-top: 24px solid ${color('neutral', '000')};
      }

      ${StyledRightCol} {
        border-top: 24px solid ${color('neutral', '600')};
      }
    }
  }
`
