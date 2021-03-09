const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export async function fetchContent(query: string): Promise<any> {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      }
    )

    const { data } = await res.json()

    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      `There was a problem retrieving entries with the query ${query}`,
      error
    )
  }

  return null
}

export default { fetchContent }
