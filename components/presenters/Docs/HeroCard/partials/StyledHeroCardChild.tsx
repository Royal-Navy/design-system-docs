import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { getColorWithOpacity } from '../../../../helpers'

const { spacing, color, shadow } = selectors

export const StyledHeroCardChild = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${getColorWithOpacity(color('neutral', 'black'))};
  border-radius: 8px;
  padding: ${spacing('6')} ${spacing('8')};
  color: ${color('neutral', 'white')};
  font-size: 16px;
  box-shadow: ${shadow('2')};
  margin-right: ${spacing('6')};

  &:last-of-type {
    margin-right: unset;
  }

  & > a {
    color: inherit;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`
