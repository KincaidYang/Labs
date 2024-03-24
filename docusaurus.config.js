// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AS295794 Labs',
  tagline: 'AS295794 Labs',
  url: 'https://labs.as295794.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/AS205794Labs.png',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KincaidYang', // Usually your GitHub org/user name.
  projectName: 'Labs', // Usually your repo name.

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KincaidYang/Labs/tree/main/blog',
        },
        gtag: {
          trackingID: 'G-DHNVHPYK9P',
          anonymizeIP: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AS205794 Labs',
        logo: {
          alt: 'Site Logo',
          src: 'img/AS205794Labs.png',
        },
        items: [
          /** {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          }, */
          {
            href: 'https://github.com/KincaidYang/Labs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduce',
                to: '/',
              },
              {
                label: 'Labs',
                to: '/category/labs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Email',
                href: 'mailto:yjz@r2wind.org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/KincaidYang/Labs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AS205794 Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['json', 'bash'],
      },
    }),
};

module.exports = config;
