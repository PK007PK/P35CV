module.exports = {
  siteMetadata: {
    title: `Piotr Krasny CV`,
    author: {
      name: `Piotr Krasny`,
      summary: `Piotr Krasny`,
    },
    description: `Personal CV and portfolio website`,
    siteUrl: `https://krasny.netlify.app/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/thanks`],
      },
    },
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 2 })],
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        whitelist: [
          "blue-grey",
          "lighten-5",
          "mx-md-2",
          "mr-lg-0",
          "navbar-expand-lg",
          "fa-print",
          "font-weight-bold",
          "animated",
          "slideInUp",
          "rollIn",
          "active",
          "tl-edges",
          "tl-wrapper",
          "tl-wrapper--mount",
          "tl-wrapper-status--entered",
          "site",
          "navbar-dark",
          "unique-color-dark",
          "navbar",
          "navbar-expand-md",
          "container",
          "navbar-brand",
          "fas",
          "fa-check-double",
          "mr-2",
          "white-text",
          "navbar-toggler",
          "navbar-toggler-icon",
          "collapse",
          "navbar-collapse",
          "navbar-nav",
          "ml-auto",
          "nav-item",
          "mr-3",
          "nav-link",
          "mr-5",
          "btn-pink",
          "btn",
          "Ripple-parent",
          "btn-sm",
          "mr-0",
          "Ripple",
          "site-content",
          "jumbotron",
          "mt-5",
          "text-center",
          "row",
          "justify-content-between",
          "col-lg-7",
          "h1",
          "text-right",
          "h3",
          "font-weight-lighter",
          "text-md-right",
          "homepage-btn-bar",
          "btn-indigo",
          "waves-effect",
          "w-100",
          "mx-0",
          "mx-md-2",
          "fa-file-pdf",
          "ml-2",
          "fab",
          "fa-linkedin-in",
          "btn-amber",
          "ml-md-2",
          "fa-github",
          "col-lg-4",
          "mt-4",
          "mt-md-0",
          "card",
          "card-img",
          "gatsby-image-wrapper",
          "col-md-7",
          "slideInUp",
          "lead",
          "col-md-4",
          "my-3",
          "card-body",
          "h2",
          "mb-0",
          "list-unstyled",
          "mb-3",
          "h5",
          "h4",
          "text-righ",
          "d-flex",
          "justify-content-around",
          "align-items-center",
          "politechnika",
          "ekonomiczna",
          "lo",
          "page-footer",
          "font-small",
          "footer-copyright",
          "py-3",
          "col-md-3",
          "text-md-left",
          "mb-md-0",
          "fa-phone-alt",
          "mr-1",
          "col-md-6",
          "fa-react",
          "ml-md-5",
          "gatsbyIcon",
          "ml-md-4",
          "fa-mdb",
          "far",
          "fa-copyright",
          "gatsby-plugin-transition-link-portal",
          "tl-cover-el",
          "tl-edges",
          "tl-wrapper",
          "tl-wrapper--mount",
          "tl-wrapper-status--entered",
          "site",
          "navbar-dark",
          "unique-color-dark",
          "navbar",
          "navbar-expand-md",
          "container",
          "navbar-brand",
          "fas",
          "fa-check-double",
          "mr-2",
          "white-text",
          "navbar-toggler",
          "navbar-toggler-icon",
          "collapse",
          "navbar-collapse",
          "navbar-nav",
          "ml-auto",
          "nav-item",
          "mr-3",
          "nav-link",
          "mr-5",
          "btn-pink",
          "btn",
          "Ripple-parent",
          "btn-sm",
          "mr-0",
          "Ripple",
          "site-content",
          "jumbotron",
          "mt-5",
          "text-center",
          "row",
          "justify-content-between",
          "col-lg-7",
          "h1",
          "text-right",
          "h3",
          "font-weight-lighter",
          "progress",
          "my-2",
          "progress-bar",
          "bg-indigo",
          "col-lg-4",
          "mt-4",
          "mt-md-0",
          "card",
          "card-body",
          "d-flex",
          "flex-column",
          "card-text",
          "font-weight-bold",
          "text-white",
          "card-footer",
          "col",
          "mb-3",
          "col-md-7",
          "flex-column-reverse",
          "flex-wrap",
          "col-md-4",
          "mb-4",
          "far",
          "fa-bookmark",
          "page-footer",
          "font-small",
          "footer-copyright",
          "py-3",
          "col-md-3",
          "text-md-left",
          "mb-md-0",
          "fa-phone-alt",
          "mr-1",
          "col-md-6",
          "fab",
          "fa-react",
          "ml-2",
          "ml-md-5",
          "gatsbyIcon",
          "ml-md-4",
          "fa-mdb",
          "text-md-right",
          "mb-0",
          "fa-copyright",
          "gatsby-plugin-transition-link-portal",
          "tl-cover-el",
          "tl-edges",
          "tl-wrapper",
          "tl-wrapper--mount",
          "tl-wrapper-status--entered",
          "site",
          "navbar-dark",
          "unique-color-dark",
          "navbar",
          "navbar-expand-md",
          "container",
          "navbar-brand",
          "fas",
          "fa-check-double",
          "mr-2",
          "white-text",
          "navbar-toggler",
          "navbar-toggler-icon",
          "collapse",
          "navbar-collapse",
          "navbar-nav",
          "ml-auto",
          "nav-item",
          "mr-3",
          "nav-link",
          "mr-5",
          "btn-pink",
          "btn",
          "Ripple-parent",
          "btn-sm",
          "mr-0",
          "Ripple",
          "site-content",
          "jumbotron",
          "mt-5",
          "text-center",
          "row",
          "justify-content-between",
          "col-lg-7",
          "h1",
          "text-right",
          "h3",
          "font-weight-lighter",
          "my-4",
          "d-flex",
          "justify-content-end",
          "fab",
          "fa-html5",
          "fa-3x",
          "red-text",
          "fa-css3-alt",
          "blue-text",
          "fa-sass",
          "pink-text",
          "fa-js",
          "amber-text",
          "fa-react",
          "col-lg-4",
          "mt-4",
          "mt-md-0",
          "card",
          "card-img",
          "gatsby-image-wrapper",
          "mb-5",
          "col-md-7",
          "post-list-item",
          "mb-0",
          "card-body",
          "card-title",
          "card-text",
          "text-muted",
          "card-footer",
          "btn-indigo",
          "col-md-4",
          "mb-3",
          "flex-wrap",
          "badge",
          "light",
          "badge-light",
          "fa",
          "fa-hashtag",
          "fa-lg",
          "page-footer",
          "font-small",
          "footer-copyright",
          "py-3",
          "col-md-3",
          "text-md-left",
          "mb-md-0",
          "fa-phone-alt",
          "mr-1",
          "col-md-6",
          "ml-2",
          "ml-md-5",
          "gatsbyIcon",
          "ml-md-4",
          "fa-mdb",
          "text-md-right",
          "far",
          "fa-copyright",
          "gatsby-plugin-transition-link-portal",
          "tl-edges",
          "tl-wrapper",
          "tl-wrapper--mount",
          "tl-wrapper-status--entered",
          "site",
          "navbar-dark",
          "unique-color-dark",
          "navbar",
          "navbar-expand-md",
          "container",
          "navbar-brand",
          "fas",
          "fa-check-double",
          "mr-2",
          "white-text",
          "navbar-toggler",
          "navbar-toggler-icon",
          "collapse",
          "navbar-collapse",
          "navbar-nav",
          "ml-auto",
          "nav-item",
          "mr-3",
          "nav-link",
          "mr-5",
          "btn-pink",
          "btn",
          "Ripple-parent",
          "btn-sm",
          "mr-0",
          "Ripple",
          "site-content",
          "jumbotron",
          "mt-5",
          "text-center",
          "row",
          "justify-content-between",
          "col-lg-7",
          "h1",
          "text-right",
          "h3",
          "font-weight-lighter",
          "btn-default",
          "waves-effect",
          "btn-blue",
          "mr-md-0",
          "col-lg-4",
          "mt-4",
          "mt-md-0",
          "card",
          "card-body",
          "text-left",
          "grey-text",
          "md-form",
          "form-group",
          "fa",
          "fa-user",
          "prefix",
          "form-control",
          "validate",
          "fa-envelope",
          "fa-pencil-alt",
          "fa-2x",
          "md-textarea",
          "btn-warning",
          "btn-outline-warning",
          "far",
          "fa-paper-plane",
          "ml-1",
          "Ripple-outline",
          "page-footer",
          "font-small",
          "footer-copyright",
          "py-3",
          "col-md-3",
          "text-md-left",
          "mb-md-0",
          "fa-phone-alt",
          "mr-1",
          "col-md-6",
          "fab",
          "fa-react",
          "ml-2",
          "ml-md-5",
          "gatsbyIcon",
          "ml-md-4",
          "fa-mdb",
          "text-md-right",
          "mb-0",
          "fa-copyright",
          "gatsby-plugin-transition-link-portal",
          "tl-cover-el",
        ],

        //purgeOnly: ["all.min.css", "bootstrap.min.css", "mdb-free.scss"], // Purge only these files/folders
        // purgeOnly: ["all.min.css"], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-QH9GGXB26Q",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
