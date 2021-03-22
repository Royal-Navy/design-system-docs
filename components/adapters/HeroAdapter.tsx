import React from 'react'
import { camelCase } from 'lodash'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { Hero } from '../presenters/Hero'

interface HeroAdapterProps extends ComponentWithClass {
  fields: any
  id?: string
}

export const HeroAdapter: React.FC<HeroAdapterProps> = ({ fields }) => {
  const { title, heading, heroDescription } = fields
  const id = camelCase(title)

  return <Hero id={id} title={heading} description={heroDescription} />
}
