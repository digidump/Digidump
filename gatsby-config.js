/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://01unr0-xi.myshopify.com`, x
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_APP_PASSWORD,
        storeUrl: process.env.GATSBY_MYSHOPIFY_URL,
      },
    },
    "gatsby-plugin-image",
  ],
}

