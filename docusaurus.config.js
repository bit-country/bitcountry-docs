module.exports = {
  title: 'Bit.Country Documentation',
  tagline: 'Learn how to integrate with the Metaverse Network - Bit.Country',
  url: 'http://docs.bit.country/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bit-country',
  projectName: 'bitcountry-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bit.Country Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/bit-country',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'Bit.Country Validators',
              to: '/node-operator/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://bit.country',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/2Axse8QS6X',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/BitDotCountry',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/bitcountryofficial',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Bit.Country Medium',
              to: 'https://bitcountry.medium.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bit-country',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bit.Country`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/bit-country/documentation/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
