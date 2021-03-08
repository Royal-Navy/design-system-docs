import React from 'react'
import { storiesOf } from '@storybook/react'

import { ApiTable } from './ApiTable'
import { ApiTableDefaultValue } from './ApiTableDefaultValue'
import { ApiTableDescription } from './ApiTableDescription'
import { ApiTableItem } from './ApiTableItem'
import { ApiTableFunctionParameter } from './ApiTableFunctionParameter'

const stories = storiesOf('ApiTable', module)

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

stories.add('Function', () => (
  <ApiTable>
    <ApiTableItem name="render" type="Func">
      <ApiTableDefaultValue>
        <ApiTableFunctionParameter type="date">name1</ApiTableFunctionParameter>
        <ApiTableFunctionParameter type="number">
          name2
        </ApiTableFunctionParameter>
        <ApiTableFunctionParameter type="string">
          name3
        </ApiTableFunctionParameter>
      </ApiTableDefaultValue>
      <ApiTableDescription>desc</ApiTableDescription>
    </ApiTableItem>
  </ApiTable>
))
