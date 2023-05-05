<script setup>
const props = defineProps({
	image: {
		type: String,
	},
	title: {
		type: String,
	},
	slug: {
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
		class="post-item">
		<img
			class="post-item__image"
			src="@/assets/images/aperol.jpg"
			alt="" />

		<div class="post-item__title">{{ title }}</div>
		<div class="post-item__description">
			<img
				class="post-item__description_image"
				src="@/assets/images/wolf.webp"
				alt="" />
			<span>Aperol Spitz</span>
			<span class="post-item__description_date">{{
				date
			}}</span>
		</div>
	</NuxtLink>
</template>

<style lang="scss">
.post-item {
	width: 320px;

	&__image {
		width: 100%;
		height: 240px;
		object-fit: cover;
		object-position: top;
		transition: 0.8s;
		border-radius: 10px;
	}

	&__image:hover {
		scale: 1.02;
	}

	&__title {
		margin-top: 18px;
		font-weight: 600;
		font-size: 24px;
		line-height: 28px;
	}

	&__description {
		margin-top: 14px;
		padding: 0 5px;
		display: flex;
		align-items: center;

		gap: 12px;
		&_image {
			width: 36px;
			height: 36px;
			border-radius: 50%;
		}

		&_date {
			color: var(--gray);
			margin-left: 24px;
		}
	}
}
</style>
