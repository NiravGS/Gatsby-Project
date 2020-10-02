module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        path: `${__dirname}/src/Images`,
        name: 'images'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/Images`,
        name: 'images'
      }
    }
  ],
}
