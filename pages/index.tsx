import React from 'react'

import { fetchEntries } from '../services/contentful'
import { LayoutFramework } from '../components/layouts/Framework'
import { Post } from '../components/Post'
import { PostType } from '../common'

export default function Home({ posts }) {
  return (
    <LayoutFramework>
      {posts.map(({ title }: PostType) => {
        return <Post title={title} />
      })}
    </LayoutFramework>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()

  const posts = await res.map((post: any) => {
    return post.fields
  })

  return {
    props: {
      posts,
    },
  }
}
