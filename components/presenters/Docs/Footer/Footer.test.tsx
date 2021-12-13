import React from 'react'
import { IconBookmark } from '@defencedigital/icon-library'
import Link from 'next/link'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Footer } from '.'
import { FooterExternalLink } from './FooterExternalLink'

describe('Footer', () => {
  let wrapper: RenderResult

  describe('when', () => {
    beforeEach(() => {
      wrapper = render(
        <Footer
          description="description"
          externalLinks={[
            <FooterExternalLink
              icon={<IconBookmark data-testid="icon-1" />}
              link={<Link href="#link-1">Item 1</Link>}
            />,
            <FooterExternalLink
              icon={<IconBookmark data-testid="icon-2" />}
              link={<Link href="#link-2">Item 2</Link>}
            />,
          ]}
          license="license"
          siteLinks={[
            <Link href="#link-3">Item 3</Link>,
            <Link href="#link-4">Item 4</Link>,
            <Link href="#link-5">Item 5</Link>,
          ]}
        />
      )
    })

    it('should render the description', () => {
      expect(wrapper.getByText('description')).toBeInTheDocument()
    })

    it('should render the external links', () => {
      expect(wrapper.getByText('Item 1')).toHaveAttribute('href', '/#link-1')
      expect(wrapper.getByText('Item 2')).toHaveAttribute('href', '/#link-2')
    })

    it('should render the external link icons', () => {
      expect(wrapper.getByTestId('icon-1')).toBeInTheDocument()
      expect(wrapper.getByTestId('icon-2')).toBeInTheDocument()
    })

    it('should render the license', () => {
      expect(wrapper.getByText('license')).toBeInTheDocument()
    })

    it('should render the site links', () => {
      expect(wrapper.getByText('Item 3')).toHaveAttribute('href', '/#link-3')
      expect(wrapper.getByText('Item 4')).toHaveAttribute('href', '/#link-4')
      expect(wrapper.getByText('Item 5')).toHaveAttribute('href', '/#link-5')
    })
  })
})
