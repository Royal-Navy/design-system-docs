# Royal Navy Design System Documentation

Royal Navy Design System documentation site.

## Environment variables

| Name                                | Required | Default value                                         | Description                                       |
| ----------------------------------- | -------- | ----------------------------------------------------- | ------------------------------------------------- |
| NEXT_PUBLIC_CONTENTFUL_SPACE_ID     | Yes      |                                                       | Contentful space ID                               |
| NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN | Yes      |                                                       | Contentful content delivery API token             |
| NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT  | No       | master                                                | Custom Contentful environment to use              |
| NEXT_PUBLIC_STORYBOOK_BASE_URL      | No       | `https://storybook.design-system.navy.digital.mod.uk` | Base URL for Storybook; used for embedded stories |

## End to end tests

Tests are dependent on the application running.

### Run all specs

`yarn test:e2e`

## Licensing

The Royal Navy Design System documentation site is licensed under the [Apache License 2.0](https://github.com/defencedigital/design-system-docs/blob/master/LICENSE).
