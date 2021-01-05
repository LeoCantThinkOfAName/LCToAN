module.exports = {
  flags: {PRESERVE_WEBPACK_CACHE: true},
  siteMetadata: {
    title: "LCTOAN.",
    description: "This is my rpofolio website!",
    author: "LCTOAN., Leo Lin",
    social: [
      {
        type: "mail",
        title: "Email",
        url: "mailto:lctoan.com@gmail.com",
        icon: "FaEnvelope"
      },
      {
        type: "external-link",
        title: "Github",
        url: "https://github.com/leocantthinkofaname",
        icon: "FaGithub"
      },
      // {
      //   type: "external-link",
      //   title: "Youtube",
      //   url: "https://youtube.com",
      //   icon: "FaYoutube"
      // },
      // {
      //   type: "external-link",
      //   title: "Blog",
      //   url: "https://pedestrian.com",
      //   icon: "FaGlobe"
      // }
    ]
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-remark-images",
    "gatsby-transformer-remark",
    "gatsby-plugin-glslify",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.tsx")
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-typescript-pwa",
        short_name: "starter",
        start_url: "/",
        background_color: "#efefef",
        theme_color: "#efefef",
        display: "minimal-ui",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        appendScript: require.resolve("./src/service-worker.js")
      }
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        codegen: true,
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          "./node_modules/gatsby-*/**/*.js"
        ],
        fileName: "generated/graphql-type.ts"
      }
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/lang`,
        languages: ["en", "zh-TW"],
        defaultLanguage: "en"
      }
    },
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        sourceMap: true,
        cssPropOptimization: true,
        minification: true,
        contextualClassName: true,
        componentsAsSelector: true,
        deadCodeElimination: true
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato", "Noto Sans TC"]
        }
      }
    },
    /**
     * SOURCING FILESYSTEM
     */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "root",
        path: `${__dirname}/src`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/src/contents`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    }
  ]
};
