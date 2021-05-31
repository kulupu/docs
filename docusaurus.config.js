module.exports = {
  title: 'Kulupu',
  tagline: 'A proof-of-work blockchain with on-chain governance and online upgrade.',
  url: 'https://kulupu.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kulupu',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'Kulupu',
      logo: {
        alt: 'Kulupu logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/kulupunetwork',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/kulupu/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/DZbg4rZ',
            },
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kulupu/kulupu',
            },
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/#kulupu:matrix.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kulupu contributors.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/kulupu/docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/kulupu/docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
