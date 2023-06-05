// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Steele Charles',
  tagline: 'Relationship led headhunting',
  favicon: 'img/SC_logo.jpeg',

  // Set the production url of your site here
  url: 'https://www.steelecharles.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'steele-charles', // Usually your GitHub org/user name.
  projectName: 'steele-charles', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/SC_logo.jpeg',
      navbar: {
        title: 'Steele Charles',
        logo: {
          alt: 'Steele Charles Logo',
          src: 'img/SC_logo.jpeg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/jobs', label: 'Jobs', position: 'left'},
          {to: 'https://www.linkedin.com/company/steele-charles-ltd/', label: 'Linkedin', position: 'left'},
          {to: '/about', label: 'About Us', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Linkedin',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'About Us',
                href: '/about',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Steele Charles Ltd. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
