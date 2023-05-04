<template>
	<main>
		<Header />
		<slot />
	</main>
</template>

<style lang="scss">
:root {
	--white: #ffffff;
}

a {
	color: var(--white);
}
body {
	background: #181a29;
	font-family: 'Roboto Flex', sans-serif;
}

main {
	max-width: 1280px;
}
</style>
