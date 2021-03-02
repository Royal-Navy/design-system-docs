import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import {
  ApiTable,
  ApiTableDefaultValue,
  ApiTableDescription,
  ApiTableItem,
} from '.'

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
})
