import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize, mq, spacing } = selectors

export const StyledBodyRowValue = styled.div`
  width: calc(100% - 120px);
  padding-top: ${spacing('px')};
  font-size: ${fontSize('base')};

  ${mq({ gte: 'm' })`
    font-size: ${fontSize('m')};
  `}

  > code {
    font-size: ${fontSize('m')};
    color: ${color('neutral', '500')};
    font-weight: 400;
    letter-spacing: -0.5px;
    background-color: ${color('neutral', '000')};
    display: block;
    margin: ${spacing('px')} 0 ${spacing('4')};
    padding-left: 0;
  }
`
