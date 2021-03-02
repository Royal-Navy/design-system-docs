import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import {
  ApiTable,
  ApiTableDefaultValue,
  ApiTableDescription,
  ApiTableItem,
} from '.'
import { ApiTableFunctionParameter } from './ApiTableFunctionParameter'

describe('API table', () => {
  let wrapper: RenderResult

  describe('all item props', () => {
    beforeEach(() => {
      wrapper = render(
        <ApiTable>
          <ApiTableItem isRequired name="startDate" type="Date">
            <ApiTableDefaultValue>default</ApiTableDefaultValue>
            <ApiTableDescription>desc</ApiTableDescription>
          </ApiTableItem>
        </ApiTable>
      )
    })

    it('should render the name', () => {
      expect(wrapper.getByText('startDate')).toBeInTheDocument()
    })

    it('should render the `Required` badge', () => {
      expect(wrapper.getByText('Required')).toBeInTheDocument()
    })

    it('should render the type', () => {
      expect(wrapper.getByText('Date')).toBeInTheDocument()
    })

    it('should render the default value', () => {
      expect(wrapper.getByText('default')).toBeInTheDocument()
    })

    it('should render the description', () => {
      expect(wrapper.getByText('desc')).toBeInTheDocument()
    })
  })

  describe('minimal item props', () => {
    beforeEach(() => {
      wrapper = render(
        <ApiTable>
          <ApiTableItem name="startDate" type="Date">
            <ApiTableDefaultValue />
            <ApiTableDescription>desc</ApiTableDescription>
          </ApiTableItem>
        </ApiTable>
      )
    })

    it('should not render the `Required` badge', () => {
      expect(wrapper.queryAllByText('Required')).toHaveLength(0)
    })

    it('should render the default value', () => {
      expect(wrapper.getByText('-')).toBeInTheDocument()
    })
  })

  describe('function item', () => {
    beforeEach(() => {
      wrapper = render(
        <ApiTable>
          <ApiTableItem name="startDate" type="Date">
            <ApiTableDefaultValue>
              <ApiTableFunctionParameter type="date">
                name1
              </ApiTableFunctionParameter>
              <ApiTableFunctionParameter type="number">
                name2
              </ApiTableFunctionParameter>
              <ApiTableFunctionParameter type="string">
                name3
              </ApiTableFunctionParameter>
            </ApiTableDefaultValue>
          </ApiTableItem>
        </ApiTable>
      )
    })

    it('should render the parameter names', () => {
      const parameterNames = wrapper.getAllByTestId('api-table-parameter-name')
      expect(parameterNames[0]).toHaveTextContent('name1')
      expect(parameterNames[1]).toHaveTextContent('name2')
      expect(parameterNames[2]).toHaveTextContent('name3')
      expect(parameterNames).toHaveLength(3)
    })

    it('should render the parameter types', () => {
      const parameterTypes = wrapper.getAllByTestId('api-table-parameter-type')
      expect(parameterTypes[0]).toHaveTextContent('date')
      expect(parameterTypes[1]).toHaveTextContent('number')
      expect(parameterTypes[2]).toHaveTextContent('string')
      expect(parameterTypes).toHaveLength(3)
    })
  })
})
