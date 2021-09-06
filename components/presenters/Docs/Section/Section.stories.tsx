import React from 'react'
import { storiesOf } from '@storybook/react'

import { Section } from '.'

const stories = storiesOf('Docs/Section', module)

stories.add('Default', () => (
  <Section sectionIndex="1" title="Get started">
    <p>
      Want to dive right in? Use the following steps to quickly set up a
      project.
    </p>
  </Section>
))
