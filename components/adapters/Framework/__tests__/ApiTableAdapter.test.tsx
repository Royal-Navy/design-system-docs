import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { ApiTableAdapter } from '../ApiTableAdapter'

describe('Framework/ApiTableAdapter', () => {
  let wrapper: RenderResult

  const fields = {
    sys: {
      id: '4M7PH7rHfTWPZ57weiQMpv',
    },
    title: 'Example Title',
    apiTableDescription: 'Example description.',
    apiFieldCollection: {
      items: [],
    },
    apiReturnFieldCollection: {
      items: [
        {
          name: 'foo',
          dataType: 'boolean',
          defaultValue: 'undefined',
          description: 'Example field description.',
          required: true,
        },
      ],
    },
  }

  describe('with fields', () => {
    beforeEach(() => {
      wrapper = render(<ApiTableAdapter fields={fields} />)
    })

    it('renders the title', () => {
      expect(wrapper.queryByText('Example Title')).toBeInTheDocument()
    })

    it('renders the description', () => {
      expect(wrapper.queryByText('Example description.')).toBeInTheDocument()
    })

    it('renders the Return Object heading', () => {
      expect(wrapper.queryByText('Return')).toBeInTheDocument()
    })

    it('should render the `Required` badge', () => {
      expect(wrapper.getByText('Required')).toBeInTheDocument()
    })

    it('should render the type', () => {
      expect(wrapper.getByText('boolean')).toBeInTheDocument()
    })

    it('should render the default value', () => {
      expect(wrapper.getByText('undefined')).toBeInTheDocument()
    })

    it('should render the description', () => {
      expect(
        wrapper.getByText('Example field description.')
      ).toBeInTheDocument()
    })
  })
})
