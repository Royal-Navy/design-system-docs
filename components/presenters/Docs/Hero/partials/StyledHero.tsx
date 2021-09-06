import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, mq } = selectors

export const StyledHero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 ${spacing('15')} ${spacing('14')};
  padding-top: ${spacing('14')};
  text-align: center;

  ${mq({ gte: 's' })`
    margin: 0 ${spacing('15')} ${spacing('12')};
  `}

  ${mq({ gte: 'm' })`
    margin:  0 ${spacing('12')} ${spacing('20')};
    padding-top: ${spacing('18')};
  `}

  ${mq({ gte: 'l' })`
    margin: 160px 32px 200px;
    padding-top: 0;
  `}
`
