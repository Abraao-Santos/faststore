module.exports = {
  seo: {
    title: 'NextJSStore',
    description: 'Fast Demo Store',
    titleTemplate: '%s | FastStore',
    author: 'Store Framework',
  },

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'storeframework',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default channel
  channel: '{"salesChannel":"1"}',
  locale: 'en-US',

  // Default faststore Production URLs tests
  storeUrl: 'https://vtexfaststore.com',
  secureSubdomain: 'https://secure.vtexfaststore.com',
  checkoutUrl: 'https://secure.vtexfaststore.com/checkout',
  loginUrl: 'https://secure.vtexfaststore.com/api/io/login',
  accountUrl: 'https://secure.vtexfaststore.com/api/io/account',

  // Production URLs tests
  // storeUrl: 'https://abraao--rocky.myvtex.com',
  // secureSubdomain: 'https://abraao--rocky.myvtex.com',
  // checkoutUrl: 'https://abraao--rocky.myvtex.com/checkout',
  // loginUrl: 'https://abraao--rocky.myvtex.com/api/io/login',
  // accountUrl: 'https://abraao--rocky.myvtex.com/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server:
      process.env.BASE_SITE_URL ||
      'https://faststore-8a8ovpnio-abraao-santos.vercel.app' ||
      'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse-99988212/p',
      collection: '/office',
    },
    uploadArtifacts: true,
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse-99988212/p',
      collection: '/office',
      collection_filtered:
        '/office/?category-1=office&marca=acer&facets=category-1%2Cmarca',
      search: '/s?q=orange',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },
}
