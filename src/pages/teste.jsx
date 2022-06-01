import React from 'react'

import storeConfig from '../../store.config'

const teste = () => {
  const { title } = storeConfig.seo

  return (
    <>
      <h1>{title}</h1>
      <div>teste page</div>
    </>
  )
}

export default teste
