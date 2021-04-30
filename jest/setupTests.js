import 'babel-polyfill'
import 'jest-canvas-mock'
import 'jest-styled-components'
import { format } from 'util'
import fetchMock from 'jest-fetch-mock'

// Mock fetch requests

fetchMock.enableMocks()

// Throw real errors for React runtime console.error

const originalConsoleError = global.console.error

global.console.error = (...args) => {
  const reactFailures = [/Failed prop type/, /Warning: /]

  if (reactFailures.some((p) => p.test(args[0]))) {
    originalConsoleError(...args)
    throw new Error(format(...args))
  }
}
