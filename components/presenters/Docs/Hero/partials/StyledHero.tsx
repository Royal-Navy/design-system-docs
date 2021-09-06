import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, mq } = selectors

export const StyledHero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${spacing('15')} ${spacing('8')};
  text-align: center;

  ${mq({ gte: 's' })`
    padding: ${spacing('15')} ${spacing('12')};
  `}
`
