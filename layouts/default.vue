<template>
	<main>
		<Header />
		<slot />
	</main>
</template>

<style lang="scss">
:root {
	--bluegray: #181a29;
	--white: #ffffff;
	--indigo: #242534;
	--gray: #97989f;
}

a {
	color: var(--white);
}
body {
	background: var(--bluegray);
	font-family: 'Roboto Flex', sans-serif;
	color: var(--white);
}

main {
	max-width: 1280px;
	margin: 0 auto;
}
</style>
