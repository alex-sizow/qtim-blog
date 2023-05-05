<script setup>
import PostItem from '@/components/home/PostList/PostItem';

const props = defineProps({
	posts: {
		type: Array,
	},
});
</script>

<template>
	<div class="posts">
		<div class="posts__title">Latest Post</div>
		<div class="posts__items">
			<PostItem
				v-for="(post, index) in posts"
				:key="index"></PostItem>
		</div>
	</div>
</template>

<style lang="scss">
.posts {
	margin-top: 190px;
	width: 80%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	row-gap: 30px;

	&__title {
		font-weight: 600;
		font-size: 24px;
		line-height: 28px;
	}

	&__items {
		display: flex;
		justify-content: center;
		gap: 20px;
		flex-wrap: wrap;
	}
}
</style>
