<template>
	<div class="header">
		<NuxtLink
			to="/"
			class="header__logo">
			<img
				src="@/assets/images/logo.svg"
				alt="" />
			<span>AlexBlog</span></NuxtLink
		>
		<div class="header__nav">
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink to="/about">About</NuxtLink>
		</div>
		<div class="header__search"><VInput></VInput></div>
	</div>
</template>

<script setup>
import VInput from '../ui/VInput.vue';
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 32px 0;
	color: var(--white);

	&__logo {
		color: var(--white);
		display: flex;
		align-items: center;
		gap: 9px;
		span {
			font-weight: 600;
		}
	}

	&__nav {
		display: flex;
		gap: 15px;
	}
}
</style>
