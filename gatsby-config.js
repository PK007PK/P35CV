module.exports = {
  siteMetadata: {
    title: `Piotr Krasny CV`,
    author: {
      name: `Piotr Krasny`,
      summary: `Piotr Krasny`,
    },
    description: `Personal CV and portfolio website`,
    siteUrl: `https://pkcv.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 2 })],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        whitelist: [
          "body",
          "html",
          "container",
          "row",
          "col",
          "footer-copyright",
          "py-0",
          "py-1",
          "py-2",
          "py-3",
          "py-4",
          "py-5",
          "px-0",
          "px-1",
          "px-2",
          "px-3",
          "px-4",
          "px-5",
          "fab",
          "fa-react",
          "gatsbyIcon",
          "text-left",
          "text-right",
          "fa-file-pdf",
          "far",
          "fab",
          "fa",
          "fa-lg",
          "fa-linkedin-in",
          "fa-github",
          "css3-alt",
          "sass",
          "fa-js",
          "fa-react",
          "fa-css3-alt",
          "fa-html5",
          "hashtag",
          "fa-hashtag",
          "fa-3x",
          "fa-sass",
        ],
        whitelistPatterns: [
          /0$/,
          /1$/,
          /2$/,
          /3$/,
          /4$/,
          /5$/,
          /right$/,
          /left$/,
          /center$/,
        ],
        whitelistPatternsChildren: [
          /0$/,
          /1$/,
          /2$/,
          /3$/,
          /4$/,
          /5$/,
          /right$/,
          /left$/,
          /center$/,
        ],
        // whitelist: ["whitelist"], // Don't remove this selector

        // ignore: ["src/styles/carousel/", "prismjs/", "docsearch.js/"], // Ignore files/folders
        //ignore: ["colors"], // Ignore files/folders
        // ignore: [
        // "MDBNavbar",
        // "MDBNavbarNav",
        // "MDBNavbarToggler",
        // "MDBCollapse",
        //], // Ignore files/folders
        //purgeOnly: ["src/assets/scss/"], // Purge only these files/folders
        // purgeOnly: ["all.min.css", "bootstrap.min.css", "mdb-free.scss"], // Purge only these files/folders
        purgeOnly: ["all.min.css"], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Piotr Krasny CV`,
        short_name: `PK CV`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1C2331`,
        display: `minimal-ui`,
        icon: `src/images/pklogo.svg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
