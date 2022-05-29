import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

import storeConfig from '../../store.config'

function Page() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = storeConfig.loginUrl
    }, 3e3)
  }, [])

  return (
    <>
      <NextSeo noindex nofollow />

      <div>loading...</div>
      <div>dale dale dale</div>
    </>
  )
}

export default Page
