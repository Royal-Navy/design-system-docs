import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { Hero } from '../../components/presenters/Hero'

interface HeroAdapterProps extends ComponentWithClass {
  fields: any
  id?: string
}

export const HeroAdapter: React.FC<HeroAdapterProps> = ({ fields, id }) => {
  const { title, heroDescription } = fields

  return <Hero id={id} title={title} description={heroDescription} />
}
