import { themes } from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import type * as Plugin from '@docusaurus/types/src/plugin';

const config: Config = {
  title: 'MUI tel input',
  tagline: 'A phone number input designed for the React library MUI built with',
  url: 'https://github.com',
  baseUrl: '/hyperse-io',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/icon/favicon.ico',
  organizationName: 'Hyperse',
  projectName: 'docusaurus-hyperse',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/hyperse-io/docusaurus-hyperse',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/layout.css'),
            require.resolve('./src/css/overrides.css'),
            require.resolve('./src/css/code-blocks.css'),
          ],
        },
        gtag: {
          trackingID: 'GTM-THVM29S',
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Hyperse',
      hideOnScroll: false,
      logo: {
        alt: 'Hyperse',
        src: 'img/logo.svg',
        style: {
          borderRadius: '2px',
        },
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/hyperse-io',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/@hyperse/eslint-config-hyperse',
          label: 'NPM',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Hyperse',
        src: '/img/logo.svg',
        height: 40,
        style: {
          borderRadius: '2px',
        },
        href: 'https://github.com/hyperse-io',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Hyperse`,
    },
    algolia: {
      apiKey: '441074cace987cbf4640c039ebed303c',
      appId: 'J0EABTYI1A',
      indexName: 'docusaurus-openapi',
    },
    prism: {
      theme: themes.nightOwlLight,
      darkTheme: themes.nightOwl,
      additionalLanguages: ['docker', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require.resolve('tailwindcss'));
          postcssOptions.plugins.push(require.resolve('autoprefixer'));
          return postcssOptions;
        },
      };
    } satisfies Plugin.PluginModule,
  ],
};

export default async function createConfig() {
  return config;
}
