module.exports = {
  siteMetadata: {
    title: `Chetoui Hamza`,
    description: `chetoui's hamza personal website`,
    author: `@okuninoshi`,
    keywords: 'chetoui hamza, web, jamstack, tipaza, fouka, faster websites, site web static, api, sécurisé, ecommerce algerie, strapi, gatsby, cdn, netlify',
    siteUrl: 'https://chetoui-hamza.netlify.app',
    image: '/img/autoportrait.png'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chetoui-hamza`,
        short_name: `hamza`,
        start_url: `/`,
        background_color: `#d6f756`,
        theme_color: `#d6f756`,
        display: `minimal-ui`,
        icon: `src/images/autoportrait.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Space Mono\:400,700`,
          `Major Mono Display`,
          `Bowlby One SC`
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-56545ZM",

    //     // Include GTM in development.
    //     //
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     //
    //     // Defaults to null
    //     defaultDataLayer: { platform: "gatsby" },

    //     // Specify optional GTM environment details.
    //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
    //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
    //     // dataLayerName: "YOUR_DATA_LAYER_NAME",

    //     // Name of the event that is triggered
    //     // on every Gatsby route change.
    //     //
    //     // Defaults to gatsby-route-change
    //     // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-1FFX7KK27P",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    // {

    //   resolve: 'gatsby-plugin-crisp-chat',
    //   options: {
    //     websiteId: 'ddad7727-c579-4593-b3d6-58c7f1a329c1',
    //     enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    //     defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
    //     enableImprovedAccessibility: true // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
