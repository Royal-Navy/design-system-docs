import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, mq, spacing } = selectors

export const StyledTitle = styled.span`
  display: inline-block;
  position: relative;
  font-size: ${fontSize('xxl')};
  font-weight: 700;
  margin-bottom: 10px;

  &::after {
    display: inline-block;
    border-radius: 15px;
    content: '';
    height: 4px;
    width: 42px;
    background-color: ${({ $titleColor }) => $titleColor};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 15px);
  }

  ${mq({ gte: 'l' })`
    margin-bottom: unset;
    margin-left: ${spacing('6')};

    &::after {
      width: 24px;
      left: 0;
      top: 0;
      transform: translate(calc(-50% - 10px), 12px) rotate(90deg)
    }
  `}
`
