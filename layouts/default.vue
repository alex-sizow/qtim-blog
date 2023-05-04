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
body {
	background: #181a29;
}

main {
	max-width: 1280px;
}
</style>
