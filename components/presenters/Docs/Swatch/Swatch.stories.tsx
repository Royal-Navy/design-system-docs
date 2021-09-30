import React from 'react'
import { storiesOf } from '@storybook/react'

import { Swatch, SwatchColour } from '.'

const stories = storiesOf('Docs/Swatch', module)

stories.add('Default', () => (
  <Swatch>
    <SwatchColour colour="#0a141b" isDark>
      900
    </SwatchColour>
    <SwatchColour colour="#0c1720" isDark>
      800
    </SwatchColour>
    <SwatchColour colour="#12202b" isDark>
      700
    </SwatchColour>
    <SwatchColour colour="#1c2d39" isDark>
      600
    </SwatchColour>
    <SwatchColour colour="#233745" isDark>
      500
    </SwatchColour>
    <SwatchColour colour="#3e5667" isDark>
      400
    </SwatchColour>
    <SwatchColour colour="#748999">300</SwatchColour>
    <SwatchColour colour="#b8c7d2">200</SwatchColour>
    <SwatchColour colour="#e2e9ee">100</SwatchColour>
    <SwatchColour colour="#f8fafc">000</SwatchColour>
    <SwatchColour colour="#0a141b" isDark>
      Black
    </SwatchColour>
    <SwatchColour colour="#FFFFFF">White</SwatchColour>
  </Swatch>
))
