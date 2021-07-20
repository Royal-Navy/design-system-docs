import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import { IconHome } from '@royalnavy/icon-library'

import { ContentBanner } from '.'

describe('ContentBanner', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(
        <ContentBanner
          icon={<IconHome data-testid="content-banner-icon" />}
          title="Example Title"
        >
          Hello, World!
        </ContentBanner>
      )
    })

    it('renders the children', () => {
      expect(wrapper.queryByText('Hello, World!')).toBeInTheDocument()
    })

    it('renders the title', () => {
      expect(wrapper.queryByText('Example Title')).toBeInTheDocument()
    })

    it('renders the supplied SVG icon', () => {
      expect(wrapper.queryByTestId('content-banner-icon')).toBeInTheDocument()
    })
  })
})
