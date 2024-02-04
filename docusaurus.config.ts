"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prism_react_renderer_1 = require("prism-react-renderer");
const config = {
    title: 'Simple Utility Functions for Your End to End Testing Suite. Effortless Testing Awaits: Just Plug In and Play Out. ',
    tagline: 'Introducing the ultimate utility library for seamless testing with Playwright. Conduct comprehensive tests with the simplicity of a plug-and-play approach. Easily recall and maintain your testing scripts, ensuring a streamlined workflow that resonates with both novice and seasoned testers and lead the way in quality assurance. ',
    favicon: 'img/logo.png',
    // Set the production url of your site here
    url: 'https://plugandplaywright.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'plugandplaywright', // Usually your GitHub org/user name.
    projectName: 'plugandplaywright', // Usually your repo name.
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'ignore',
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    sidebarCollapsed: false,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                // blog: {
                //   showReadingTime: true,
                //   // Please change this to your repo.
                //   // Remove this to remove the "edit this page" links.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: './src/css/custom.css',
                },
            },
        ],
    ],
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'plugandplaywright',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Get Started 🔌',
                },
                { to: '/docs/getting-started/installation', label: 'Installation 🔌', position: 'left' },
                {
                    href: 'https://github.com/lottie-logic/plugandplaywright',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        // footer: {
        //   style: 'dark',
        //   links: [
        //     {
        //       title: 'Docs',
        //       items: [
        //         {
        //           label: 'Tutorial',
        //           to: '/docs/intro',
        //         },
        //       ],
        //     },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        //     {
        //       title: 'More',
        //       items: [
        //         // {
        //         //   label: 'Blog',
        //         //   to: '/blog',
        //         // },
        //         {
        //           label: 'GitHub',
        //           href: 'https://github.com/lottie-logic/plugandplaywright',
        //         },
        //       ],
        //     },
        //   ],
        //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        // },
        prism: {
            theme: prism_react_renderer_1.themes.github,
            darkTheme: prism_react_renderer_1.themes.dracula,
        },
    },
};
exports.default = config;
