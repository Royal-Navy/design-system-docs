import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { PageBanner } from '.'

describe('PageBanner', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(<PageBanner>Hello, World!</PageBanner>)
    })

    it('render the children', () => {
      expect(wrapper.queryByText('Hello, World!')).toBeInTheDocument()
    })

    describe('and the end user clicks the close button', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('page-banner-button'))
      })

      it('should remove the component from the DOM', () => {
        expect(wrapper.queryByTestId('page-banner')).not.toBeInTheDocument()
      })
    })
  })
})
