import '@defencedigital/fonts'

import { GlobalStyleProvider } from '@defencedigital/react-component-library'

export const parameters = {
  layout: 'fullscreen',
}

export const decorators = [
  (Story) => (
    <GlobalStyleProvider>
      <Story />
    </GlobalStyleProvider>
  ),
]
