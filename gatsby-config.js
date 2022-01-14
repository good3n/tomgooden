module.exports = {
  siteMetadata: {
    title: `Tom Gooden | Web Development + Design`,
    description: `Web Development + Design by Tom Gooden | Metro-Detroit, Michigan`,
    siteUrl: `https://tomgooden.net`,
    author: `Tom Gooden @good3n`,
    twitterUsername: '@good3n',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [`Referrer-Policy: strict-origin-when-cross-origin`],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      /* Include plugin */
      resolve: 'gatsby-omni-font-loader',

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: 'async',

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        // preconnect: ['https://fonts.gstatic.com'],
        preconnect: ['https://fonts.googleapis.com'],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        // custom: [
        //   {
        //     /* Exact name of the font as defied in @font-face CSS rule */
        //     name: ['Font Awesome 5 Brands', 'Font Awesome 5 Free'],
        //     /* Path to the font CSS file inside the "static" folder with @font-face definition */
        //     file: '/fonts/fontAwesome/css/all.min.css',
        //   },
        // ],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: 'Inter',
            /* URL to the font CSS file with @font-face definition */
            file: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=block',
          },
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: 'Fira Code',
            /* URL to the font CSS file with @font-face definition */
            file: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@600&display=block',
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tom-gooden-website`,
        short_name: `tom-gooden-website`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          `gatsby-remark-relative-images`,
          `gatsby-remark-check-links`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_self',
              rel: 'nofollow',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 70,
              maxWidth: 670,
              wrapperStyle: `display: block;`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://tomgooden.net',
        sitemap: 'https://tomgooden.net/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-advanced-sitemap`,
    //   options: {
    //     exclude: [
    //       `/dev-404-page`,
    //       `/404`,
    //       `/404.html`,
    //       `/offline-plugin-app-shell-fallback`,
    //       /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
    //     ],
    //     createLinkInHead: true, // optional: create a link in the `<head>` of your site
    //     addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-142430836-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
  ],
}
