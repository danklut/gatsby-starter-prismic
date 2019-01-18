module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'AOM Cloud Enterprise Group', // Navigation and Site Title
  titleAlt: 'AOM Cloud Enterprise' // Title for JSONLD
  description: 'The AOM Cloud Enterprise Blog is part of the AOM Cloud Enterprise Group.',
  headline: 'Welcome to the AOM Cloud Enterprise Blog', // Headline for schema.org JSONLD
  url: 'https://aomcloudenterprise.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'AOMCloud', // shortname for manifest. MUST be shorter than 12 characters
  author: 'DanKlut', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@starter_prismicio', // Twitter Username
  facebook: 'gatsby-prismic', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
