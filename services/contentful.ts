import { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master'

export async function contentful(
  query: DocumentNode,
  variables: Record<string, unknown>
): Promise<Record<string, any>> {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query: print(query), variables }),
      }
    )

    const { data, errors } = await res.json()

    if (errors) {
      throw new Error(JSON.stringify(errors, null, 2))
    }

    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      `There was a problem retrieving entries with the query`,
      query,
      error
    )
  }

  return null
}

export default { contentful }
