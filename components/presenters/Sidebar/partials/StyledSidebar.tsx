import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, mq } = selectors

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${color('neutral', '700')};
  transform: translate3d(-120%, 0, 0);
  width: 300px;
  pointer-events: all;
  transition: all 0.2s;

  ${mq({ gte: 'm' })`
    transition: none;
    transform: translate3d(0, 0, 0);
  `}
`
