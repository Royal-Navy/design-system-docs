import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

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
    padding: ${spacing('18')} ${spacing('12')} ${spacing('10')};
  `}

  ${mq({ gte: 'xl' })`
    padding: 160px ${spacing('12')} ${spacing('14')};
  `}


  // Ultrawide screens
  @media only screen and (min-width: 1800px) {
    padding: 260px ${spacing('12')} ${spacing('20')};
  }
`
