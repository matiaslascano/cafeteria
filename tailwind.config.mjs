/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blanco': '#fff',
				'negro': '#000',
				'gris-claro': '#F5F5F5',
				'gris-medio': '#808080',
				'beige': '#F5F5DC',
				'terracota': '#E2725B',
			},

		},
	},
	plugins: [],
}
