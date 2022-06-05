import type {GatsbyConfig} from 'gatsby';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
    siteMetadata: {
        title: process.env.SITE_TITLE
    },
    plugins: [
        'gatsby-plugin-root-import',
        {
            resolve: 'gatsby-source-contentful',
            options: {
              'accessToken': process.env.CONTENTFUL_ACCESS_TOKEN,
              'spaceId': process.env.CONTENTFUL_SPACE_ID
            }
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                'icon': 'src/favicon.png'
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-svgr-svgo',
            options: {
                inlineSvgOptions: [
                    {
                        test: /\.svg$/,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: [{name: 'removeViewBox', active: false}],
                                    },
                                },
                                'prefixIds',
                            ],
                        },
                    },
                ],
                urlSvgOptions: [
                    {
                        test: /\.url.svg$/,
                        svgoConfig: {
                            plugins: [{name: 'removeViewBox', active: false}],
                        },
                    },
                ],
            },
        },
    ]
} as GatsbyConfig;
