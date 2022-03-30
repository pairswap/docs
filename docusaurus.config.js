module.exports = {
  title: "KO Exchange",
  tagline:
    "Trade, earn, stack yields and win crypto on the most community driven, decentralized platform",
  url: "http://localhost:3000",
  baseUrl: "/",
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "KO Exchange",
      logo: {
        src: "/img/logo.png",
        alt: "logo",
      },
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} by KO Exchange`,
    },
  },
};
