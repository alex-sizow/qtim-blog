<script setup lang="ts">
const props = defineProps({
	slug: {
		type: String,
	},
	image: {
		type: String,
	},
	title: {
		type: String,
	},
	preview: {
		type: String,
	},
	date: {
		type: String,
	},
});
</script>

<template>
	<NuxtLink
		:to="slug"
		class="banner">
		<img
			class="banner__image"
			src="@/assets/images/aperol.jpg"
			alt="" />
		<div class="banner__description">
			<div class="banner__description_title">{{ title }}</div>
			<div class="banner__preview">{{ preview }}</div>
			<div class="banner__description_date">
				{{ date }}
			</div>
		</div>
	</NuxtLink>
</template>

<style lang="scss">
.banner {
	width: 100%;
	height: 550px;
	display: flex;
	justify-content: center;
	position: relative;

	&__image {
		width: 80%;
		object-fit: cover;
		object-position: top;
		transition: 0.8s;
		border-radius: 10px;
	}

	&__image:hover {
		transition: 0.8s;
		object-position: center;
		scale: 0.98;
	}

	&__description {
		position: absolute;
		bottom: -70px;
		left: 14%;
		width: 42%;
		background-color: var(--bluegray);
		border: 1px solid #242535;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 40px;
		gap: 24px;
		transition: 0.2s;
		&_title {
			font-weight: 600;
			font-size: 36px;
			line-height: 40px;
		}
		&_date {
			color: var(--gray);
		}
	}
	&__description:hover {
		transition: 0.4s;
		scale: 1.1;
	}
}
</style>
