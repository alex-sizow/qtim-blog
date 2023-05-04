export default defineEventHandler((event) => {
	const { query } = getQuery(event);
	const config = useRuntimeConfig;
	return $fetch(`${config.apiBaseUrl}/posts/${query}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${config.apiKey}`,
		},
	});
});
