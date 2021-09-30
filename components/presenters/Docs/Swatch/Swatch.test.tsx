import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Swatch, SwatchColour } from '.'

describe('Swatch', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <Swatch>
        <SwatchColour colour="#0a141b" isDark>
          900
        </SwatchColour>
        <SwatchColour colour="#0c1720" isDark>
          800
        </SwatchColour>
        <SwatchColour colour="#FFFFFF">White</SwatchColour>
      </Swatch>
    )
  })

  it('should render the items', () => {
    const items = wrapper.getAllByTestId('swatch-colour')

    expect(items[0]).toHaveTextContent('900')
    expect(items[0]).toHaveTextContent('#0a141b')
    expect(items[1]).toHaveTextContent('800')
    expect(items[1]).toHaveTextContent('#0c1720')
    expect(items[2]).toHaveTextContent('White')
    expect(items[2]).toHaveTextContent('#FFFFFF')
    expect(items).toHaveLength(3)
  })
})
