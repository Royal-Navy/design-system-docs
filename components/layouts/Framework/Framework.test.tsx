import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, waitFor } from '@testing-library/react'
import fetch from 'jest-fetch-mock'

import { LayoutFramework } from '.'

describe('LayoutFramework', () => {
  let wrapper: RenderResult

  it('fetches and displays the RNDS latest tag', async () => {
    fetch.mockResponseOnce(JSON.stringify({ tag_name: '1.2.3' }))
    wrapper = render(
      <LayoutFramework navigation={null}>Hello, World!</LayoutFramework>
    )

    expect(fetch).toHaveBeenCalledTimes(1)

    return waitFor(() =>
      expect(wrapper.queryByText('v1.2.3')).toBeInTheDocument()
    )
  })
})
