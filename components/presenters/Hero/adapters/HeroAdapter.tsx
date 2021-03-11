import React from 'react'
import camelCase from 'lodash/camelCase'

import { ComponentWithClass } from '../../../../common/ComponentWithClass'
import { Hero } from '..'

interface HeroAdapterProps extends ComponentWithClass {
  fields: any
}

export const HeroAdapter: React.FC<HeroAdapterProps> = ({ fields }) => {
  const { title, heroDescription } = fields
  const id = camelCase(title)

  return <Hero id={id} title={title} description={heroDescription} />
}
