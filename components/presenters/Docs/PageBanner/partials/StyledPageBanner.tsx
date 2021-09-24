import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledMasthead } from '../../Masthead/partials/StyledMasthead'
import { StyledBody } from '../../../../layouts/Legacy/partials/StyledBody'
import { StyledMastheadWrapper } from '../../../../layouts/Legacy/partials/StyledMastheadWrapper'

interface StyledPageBannerProps {
  $isOpen: boolean
}

const { color, spacing, mq } = selectors

export const StyledPageBanner = styled.div<StyledPageBannerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 43px;
  background-color: ${color('neutral', '500')};
  color: ${color('neutral', 'white')};
  font-size: 15px;
  padding: 0 ${spacing('10')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  ${mq({ gte: 'm' })`
    padding: 0 ${spacing('13')};
  `}

  a {
    color: ${color('neutral', 'white')};
    text-decoration: underline;
    display: none;

    ${mq({ gte: 'xs' })`
      display: inline;
    `}

    &:hover {
      text-decoration: none;
    }
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      + ${StyledMastheadWrapper} > ${StyledMasthead} {
        top: 43px;
      }

      ~ ${StyledBody} {
        padding-top: 92px;

        ${mq({ gte: 'm' })`
          padding-top: 107px;
        `}
      }
    `}
`
