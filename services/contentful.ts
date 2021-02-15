import { createClient } from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space,
  accessToken,
})

export async function fetchEntries(): Promise<any> {
  try {
    const entries = await client.getEntries()

    if (entries.items) {
      return entries.items
    }
  } catch (e) {
    console.error(`Error getting Entries`, e)
  }

  return null
}

export default { fetchEntries }
