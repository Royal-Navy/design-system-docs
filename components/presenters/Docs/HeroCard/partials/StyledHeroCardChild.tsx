import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import hexRgb from 'hex-rgb'

const { spacing, color, shadow } = selectors

function getColorWithOpacity(hexColor: string) {
  const values = hexRgb(hexColor, { format: 'object' })

  return css`
    rgba(${values.red}, ${values.green}, ${values.blue}, 0.6);
  `
}

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
