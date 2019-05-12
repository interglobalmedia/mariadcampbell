module.exports = {
    siteMetadata: {
        siteTitle: `Maria D. Campbell`,
        siteTitleTemplate: 'The Investigative Developer',
        description: `Where I muse about and share my developer experiences and code.`,
        siteUrl: `https://www.mariadcampbell.com`,
        image: '/images/profileSmall.png',
        author: `Maria D. Campbell`,
        social: {
            twitter: `letsbsocial1`,
            github: `interglobalmedia`,
            facebook: `mariador62`,
            linkedin: `mariacampbell`,
        },
        twitterUsername: '@letsbsocial1',
        keywords: [
            'web-development',
            'react',
            'mongodb',
            'postgresql',
            'gatsbyjs',
            'nodejs',
            'npm',
            'jsx',
            'css-in-js',
            'styled-components',
            'jira',
            'atlassian',
            'git',
            'distributed-version-control',
            'github',
            'development',
            'production',
            'continuous-deployment',
            'git-integration',
            'css3',
            'html5',
            'audio',
            'video',
            'full-stack-development',
            'front-end-development',
            'back-end-development',
            'automated-workflows',
            'aws',
            'netlify',
            'gh-pages',
            'heroku',
            'command-line',
            'osx',
            'serverless-stack',
            'cross-browser-compatibility',
            'shadow-dom',
            'testing',
            'jest-testing',
            'html5-canvas',
            'webgl',
            'linting',
            'eslint',
            'prettier',
            'babel',
            'webpack',
            'css-modules',
            'sass',
            'homebrew',
            'responsive-design',
            'es-6',
            'modern-javascript',
            'node-security',
            'npm-audit-fix',
        ],
    },
    pathPrefix: '/',
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-twitter`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-emotion`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'blog',
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-gtag`,
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-32260397-2`,
                // Puts tracking script in the head instead of the body if true
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            noInlineHighlight: false,
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-remark-images`,
            options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 786,
                // linkImagesToOriginal: true,
                // sizeByPixelDensity: true,
                // showCaptions: true,
            },
        },
    ],
}
