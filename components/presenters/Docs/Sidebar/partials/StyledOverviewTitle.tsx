import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledOverviewTitle = styled.h2`
  font-size: ${fontSize('base')};
  color: ${color('neutral', '400')};
  font-weight: 600;
  margin-bottom: ${spacing('6')};
`
