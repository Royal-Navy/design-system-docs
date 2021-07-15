import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { shadow, spacing, mq } = selectors

export const StyledMasthead = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  z-index: 1;
  box-shadow: ${shadow('2')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: ${spacing('4')} ${spacing('10')} ${spacing('4')} ${spacing('10')};

  ${mq({ gte: 's' })`
    padding: ${spacing('4')} ${spacing('10')} ${spacing('4')} ${spacing('14')};
  `}

  ${mq({ gte: 'm' })`
    left: 300px;
    justify-content: flex-end;
  `}
`
