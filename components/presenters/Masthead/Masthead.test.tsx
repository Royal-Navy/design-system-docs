import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Masthead } from '.'

describe('Masthead', () => {
  let wrapper: RenderResult
  let onToggleSpy: (e: React.MouseEvent<HTMLButtonElement>) => void

  describe('with required props', () => {
    beforeEach(() => {
      onToggleSpy = jest.fn()

      wrapper = render(
        <Masthead
          title="Hello, World!"
          version="0.1.0"
          onToggle={onToggleSpy}
        />
      )
    })

    it('renders the title', () => {
      expect(wrapper.getByTestId('masthead-title')).toHaveTextContent(
        'Hello, World!'
      )
    })

    it('renders the version', () => {
      expect(wrapper.getByTestId('masthead-version')).toHaveTextContent('0.1.0')
    })

    describe('when the user clicks the toggle menu button', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('masthead-toggle-button'))
      })

      it('invokes the supplied callback', () => {
        expect(onToggleSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
