import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { mq, spacing, zIndex } = selectors

export const StyledFooterLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 277px;
  padding: 0 ${spacing('6')};

  & > div {
    text-align: center;
    z-index: ${zIndex('overlay', 1)};

    ${mq({ gte: 's' })`
      text-align: unset;
    `}
  }

  ${mq({ gte: 's' })`
    padding: 0 ${spacing('12')};
    height: 298px;
  `}
`
