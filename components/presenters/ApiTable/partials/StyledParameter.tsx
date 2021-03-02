import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledParameter = styled.div`
  background-color: ${color('neutral', 'white')};
  list-style: none;
  margin-top: -1px;
  flex: 1 0 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing('4')};
  border-right: ${spacing('2')} solid ${color('neutral', '000')};
  border-left: ${spacing('2')} solid ${color('neutral', '000')};
  margin-bottom: ${spacing('4')};

  &:last-child {
    margin-bottom: ${spacing('4')};
    max-width: 50%;
  }
`
