/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'My Personal Page',
    description: 'This is my page'
  },
  plugins: [    
    `gatsby-plugin-sass`,    
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ],
  
}
