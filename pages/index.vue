<script setup lang="ts">
import PostList from '@/components/home/PostList/index.vue';
import Banner from '@/components/home/banner';

const config = useRuntimeConfig();
const { data }: any = await useFetch(
	`${config.baseApi}/posts`,
);
const banner: any = data.value[0];

const createDate = (time: string) => {
	const date = new Date(time);
	const options: object = {
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};
	const formatter = new Intl.DateTimeFormat('ru-RU', options);
	return formatter.format(date);
};
</script>

<template>
	<div class="home">
		<Banner
			:slug="`/posts/${banner.id}`"
			:image="banner.image"
			:title="banner.title"
			:date="createDate(banner.createdAt)"
			:preview="banner.preview"></Banner>
		<PostList :posts="data.slice(0, 10)"></PostList>
	</div>
</template>

<style lang="scss">
.home {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
