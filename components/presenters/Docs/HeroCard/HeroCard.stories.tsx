import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { storiesOf } from '@storybook/react'
import { IconFileDownload } from '@royalnavy/icon-library'

import { HeroCard, HeroCardChild } from '.'
import { Button, BUTTON_VARIANT } from '../Button'
import { HERO_CARD_VARIANT } from './HeroCard'

const { color } = selectors

const StyledDollar = styled.span`
  font-weight: 600;
  color: ${color('neutral', '300')};
`

const stories = storiesOf('Docs/HeroCard', module)

stories.add('Default', () => (
  <HeroCard
    title="Designers"
    description="Designers can use our static or dynamic Axure libraries to quickly prototype, test and validate ideas with users."
    cta={
      <Button variant={BUTTON_VARIANT.SECONDARY} href="#designers-guide">
        Read the full guide
      </Button>
    }
  />
))

stories.add('Primary', () => (
  <HeroCard
    variant={HERO_CARD_VARIANT.PRIMARY}
    title="Designers"
    description="Designers can use our static or dynamic Axure libraries to quickly prototype, test and validate ideas with users."
    cta={
      <Button variant={BUTTON_VARIANT.SECONDARY} href="#designers-guide">
        Read the full guide
      </Button>
    }
  >
    <HeroCardChild>
      Download static library&nbsp;&nbsp;
      <IconFileDownload />
    </HeroCardChild>
    <HeroCardChild>
      Download dynamic library&nbsp;&nbsp;
      <IconFileDownload />
    </HeroCardChild>
  </HeroCard>
))

stories.add('Secondary', () => (
  <HeroCard
    variant={HERO_CARD_VARIANT.SECONDARY}
    title="Developers"
    description="Developers can install our React component library via NPM, or by grabbing the source from GitHub."
    cta={
      <Button variant={BUTTON_VARIANT.SECONDARY} href="#developers-guide">
        Read the full guide
      </Button>
    }
  >
    <HeroCardChild>
      <StyledDollar>$</StyledDollar>
      &nbsp;npm&nbsp;install&nbsp;@royalnavy/react-component-library
    </HeroCardChild>
  </HeroCard>
))
