// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://embeddedboys.github.io',
	base: '/Pico_DM_1P5623',
	integrations: [
		starlight({
			title: 'Pico DM 1P5623',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/embeddedboys/Pico_DM_1P5623' }],
			sidebar: [
				{
					label: '快速上手',
					translations: { en: 'Get Started' },
					autogenerate: { directory: 'get-started' },
				},
				{
					label: '开发',
					translations: { en: 'Development' },
					autogenerate: { directory: 'development' },
				},
				{
					label: 'FAQ',
					translations: { en: 'FAQ' },
					autogenerate: { directory: 'faq' },
				},
				{
					label: '关于',
					translations: { en: 'About' },
					autogenerate: { directory: 'about' },
				},
				{
					label: '致谢',
					translations: { en: 'Acknowledgements' },
					autogenerate: { directory: 'acknowledgements' },
				}
			],
		}),
	],
});
