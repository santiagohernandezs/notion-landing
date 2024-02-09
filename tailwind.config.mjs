/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: {
					default: '#000000',
					text: '#121212'
				},
				blue: {
					link: '#1b95e0'
				},
				marron: {
					default: '#c22424'
				},
				white: {
					default: '#FFFFFF',
					snow: '#F2F0EB'
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			content: {
				link: 'url("/link.svg")',
				badge: 'url("/badge.png")'
			},
			screens: {
				'mobile/sm': '375px',
				'mobile/md': '428px',
				'tablet/sm': '768px',
				'tablet/md': '834px',
				'laptop/sm': '1280px',
				'laptop/lg': '1440px',
				'desktop/sm': '1600px',
				'desktop/md': '1920px'
			}
		}
	},
	plugins: []
}
