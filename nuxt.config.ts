// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxtjs/google-fonts'],
	googleFonts: {
		display: 'swap',
		families: {
			'Roboto+Flex': [300, 400, 600],
		},
	},

	content: {
		// https://content.nuxtjs.org/api/configuration
	},

	runtimeConfig: {
		public: {
			baseApi: process.env.API_BASE_URL,
		},
	},
});
