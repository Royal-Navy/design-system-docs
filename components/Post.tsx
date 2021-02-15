import React from 'react'

interface PostProps {
  title: string
}

export const Post = ({ title }: PostProps) => {
  return (
    <article>
      <h1>{title}</h1>
    </article>
  )
}
