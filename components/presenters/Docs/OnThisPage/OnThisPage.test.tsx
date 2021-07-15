import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ColorNeutral100, ColorNeutral300 } from '@royalnavy/design-tokens'
import { render, RenderResult } from '@testing-library/react'

import { OnThisPage } from './OnThisPage'
import { OnThisPageItem } from './OnThisPageItem'

describe('OnThisPage', () => {
  let onClickSpy: (event: React.MouseEvent<HTMLDivElement>) => void
  let wrapper: RenderResult

  function expectActive(item) {
    expect(item).toHaveStyleRule('border-left', `4px solid ${ColorNeutral300}`)
    expect(item).toHaveStyleRule('padding-left', '10px')
  }

  function expectInactive(item) {
    expect(item).toHaveStyleRule('border-left', `2px solid ${ColorNeutral100}`)
    expect(item).toHaveStyleRule('padding-left', '12px')
  }

  describe('all props', () => {
    beforeEach(() => {
      onClickSpy = jest.fn()
      wrapper = render(
        <OnThisPage>
          <OnThisPageItem onClick={onClickSpy}>1</OnThisPageItem>
          <OnThisPageItem onClick={onClickSpy}>2</OnThisPageItem>
          <OnThisPageItem onClick={onClickSpy}>3</OnThisPageItem>
          <OnThisPageItem onClick={onClickSpy}>4</OnThisPageItem>
          <OnThisPageItem onClick={onClickSpy}>5</OnThisPageItem>
        </OnThisPage>
      )
    })

    it('should render five items', () => {
      const items = wrapper.getAllByTestId('on-this-page-item')

      expect(items[0]).toHaveTextContent('1')
      expect(items[1]).toHaveTextContent('2')
      expect(items[2]).toHaveTextContent('3')
      expect(items[3]).toHaveTextContent('4')
      expect(items[4]).toHaveTextContent('5')
      expect(items).toHaveLength(5)
    })

    it('and default the first item as active', () => {
      const items = wrapper.getAllByTestId('on-this-page-item')
      expectActive(items[0])
    })

    it('and set the other items as inactive', () => {
      const items = wrapper.getAllByTestId('on-this-page-item')
      expectInactive(items[1])
      expectInactive(items[2])
      expectInactive(items[3])
      expectInactive(items[4])
    })

    describe('and the second item is clicked', () => {
      beforeEach(() => {
        wrapper.getAllByTestId('on-this-page-item')[1].click()
      })

      it('should set the second item as active', () => {
        const items = wrapper.getAllByTestId('on-this-page-item')
        expectActive(items[1])
      })

      it('and set the other items as inactive', () => {
        const items = wrapper.getAllByTestId('on-this-page-item')
        expectInactive(items[0])
        expectInactive(items[2])
        expectInactive(items[3])
        expectInactive(items[4])
      })

      it('and call the `onClick` callback', () => {
        expect(onClickSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
