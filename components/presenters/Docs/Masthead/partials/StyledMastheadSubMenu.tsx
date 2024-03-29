import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing, color, shadow, mq } = selectors

export const StyledMastheadSubMenu = styled.nav`
  width: 100%;
  white-space: nowrap;
  background-color: ${color('neutral', '000')};
  padding: ${spacing('6')} 0;
  border-top: 1px solid ${color('neutral', '100')};

  ${mq({ gte: 'm' })`
    border-top: unset;
    padding: ${spacing('2')};
    width: auto;
    position: absolute;
    left: 0;
    top: ${spacing('12')};
    border: 1px solid ${color('neutral', '100')};
    border-radius: 8px;
    background-color: ${color('neutral', 'white')};
    box-shadow: ${shadow('2')};

    ol {
      flex-direction: column;
    }
  `}
`
