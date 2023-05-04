<script setup lang="ts">
import { Post } from '~/types/Post';

const config = useRuntimeConfig();

const { data } = await useFetch<Post>(
	`${config.baseApi}/posts`,
);
</script>

<template>
	<div></div>
</template>

<style></style>
