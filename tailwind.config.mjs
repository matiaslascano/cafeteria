/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blanco': '#fff',
				'negro': '#000',
				'albescent': '#F6EBDA',
				'sepia': '#a0583c',
				'beige': '#F5F5DC',
				'roman': '#835E4C',
				'brown': '#2F2105',
				'hero': '#ffbd7f'
			},

		},
	},
	plugins: [],
}
