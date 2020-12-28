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
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        commonmark: true,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,    
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
   
  ],
  
}
