import React from 'react'

import { fetchEntries } from '../services/contentful'
import { Layout } from '../components/Layout'
import { Post } from '../components/Post'
import { PostType } from '../common'

export default function Home({ posts }) {
  return (
    <Layout title="NextJS + Contentful Boilerplate">
      <main>
        {posts.map(({ title }: PostType) => {
          return <Post title={title} />
        })}
      </main>
    </Layout>
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
