import React from 'react'
import { storiesOf } from '@storybook/react'

import { ApiTable } from './ApiTable'
import { ApiTableDefaultValue } from './ApiTableDefaultValue'
import { ApiTableDescription } from './ApiTableDescription'
import { ApiTableItem } from './ApiTableItem'

const stories = storiesOf('API Table', module)

stories.add('Default', () => (
  <ApiTable>
    <ApiTableItem isRequired name="startDate" type="Date">
      <ApiTableDefaultValue />
      <ApiTableDescription>The start date of the event.</ApiTableDescription>
    </ApiTableItem>
    <ApiTableItem name="endDate" type="Date | null">
      <ApiTableDefaultValue>null</ApiTableDefaultValue>
      <ApiTableDescription>The end date of the event.</ApiTableDescription>
    </ApiTableItem>
  </ApiTable>
))
