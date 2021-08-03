/* eslint-disable camelcase */
import { useState, useEffect } from "react"

export const useDesignSystemVersion = () => {
  const [version, setVersion] = useState(null)

  async function getDesignSystemVersion(): Promise<string | null> {
    try {
      const res = await fetch(
        'https://api.github.com/repos/Royal-Navy/design-system/releases/latest'
      )

      const { tag_name } = await res.json()

      return tag_name
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Failed to fetch the Design System version!', e)
    }

    return null
  }

  useEffect(() => {
    ;(async () => {
      setVersion(await getDesignSystemVersion())
    })()
  }, [])

  return {
    version
  }
}
