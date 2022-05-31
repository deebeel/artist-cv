import type {GatsbyConfig} from 'gatsby';
const config: GatsbyConfig = {
    siteMetadata: {
        title: `Demo`,
        siteUrl: `https://www.yourdomain.tld`
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
        'gatsby-plugin-vanilla-extract',
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
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
        },
        {
            resolve: "gatsby-plugin-svgr-svgo",
            options: {
                inlineSvgOptions: [
                    {
                        test: /\.svg$/,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: "preset-default",
                                    params: {
                                        overrides: [{ name: "removeViewBox", active: false }],
                                    },
                                },
                                "prefixIds",
                            ],
                        },
                    },
                ],
                urlSvgOptions: [
                    {
                        test: /\.url.svg$/,
                        svgoConfig: {
                            plugins: [{ name: "removeViewBox", active: false }],
                        },
                    },
                ],
            },
        },
    ]
};

export default config;
