import type {GatsbyConfig} from 'gatsby';
import dotenv from 'dotenv';
dotenv.config();
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Demo`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
          'accessToken': process.env.CONTENTFUL_ACCESS_TOKEN,
          'spaceId': process.env.CONTENTFUL_SPACE_ID
      }
    },
    'gatsby-plugin-vanilla-extract',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './src/images/'
      }
    }
  ]
};

export default config;
