import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { mq } = selectors

export const StyledMastheadMenu = styled.nav`
  display: none;

  ol {
    display: inline-flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  ${mq({ gte: 'm' })`
    display: inline-flex;
  `}
`
