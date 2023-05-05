<script setup lang="ts">
const route = useRoute();

const config = useRuntimeConfig();
const post: object = await useFetch(
	`${config.baseApi}/posts/${route.params.id}`,
).data;
</script>

<template>
	<div class="blog-post">
		<div class="blog-post__body">
			<div class="blog-post__body_title">
				{{ post.title }}
			</div>

			<img
				class="blog-post__body_title-img"
				src="@/assets/images/aperol.jpg"
				alt="" />

			<div class="blog-post__body_info">
				<div class="blog-item__info_time"></div>
				<svg
					width="2"
					height="11"
					viewBox="0 0 2 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.738281 9.80899L0.580758 1.15016C0.546127 0.680093 0.79254 0.0312598 1.24678 0.157054C1.70103 0.282848 1.83184 0.680093 1.86647 1.15016L1.86647 9.80899C1.9011 10.2791 1.69248 10.9348 1.23823 10.809C0.783989 10.6832 0.761368 10.1224 0.738281 9.80899Z"
						fill="#F8DC6C" />
				</svg>

				<div class="blog-item__info_author">
					Author: Aperol Spitz
				</div>
			</div>

			<div class="blog-post__body_subtitle">
				{{ post.preview }}
			</div>
			<div class="blog-post__body_text">
				{{ post.description }}
			</div>

			<div class="blog-post__body_addition"></div>
		</div>
	</div>
</template>

<style lang="scss">
.blog-post {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding: 150px 12px 100px;
	.blog-post__body {
		max-width: 840px;
		position: relative;
		width: 100%;
		background: var(--indigo);
		border-radius: 13px;
		padding: 24px 32px;
		margin-bottom: 191px;
		.blog-post__body_title {
			font-weight: 700;
			font-size: 48px;
			line-height: 123.6%;
		}

		.blog-post__body_title-img {
			border-radius: 13px;
			margin-top: 24px;
			display: flex;
			width: 100%;
		}

		.blog-post__body_info {
			margin-top: 16px;
			display: flex;
			font-family: 'Pangolin';
			font-weight: 400;
			font-size: 12px;
			line-height: 125%;
			letter-spacing: 0.02em;
			gap: 5px;
			height: 15px;
			align-items: center;
		}

		.blog-post__body_subtitle {
			margin-top: 24px;
			color: #f8dc6c;
			font-weight: 700;
			font-size: 32px;
			line-height: 40px;
		}

		.blog-post__body_text {
			margin-top: 16px;
			font-family: 'Pangolin';
			font-weight: 400;
			font-size: 16px;
			line-height: 125%;
			letter-spacing: 0.02em;
		}
		.blog-post__body_note {
			background: #513e3e;
			border-radius: 13px;
			margin-top: 24px;
			padding: 24px;
			font-family: 'Pangolin';
		}
		.blog-post__body_footer {
			font-family: 'Pangolin';
			font-weight: 400;
			font-size: 12px;
			line-height: 125%;
			letter-spacing: 0.02em;
			color: #988c89;
			margin-top: 27px;
			.blog-post__body_footer_links {
				margin-top: 16px;
				display: flex;
				gap: 19px;
			}
		}
		.blog-post__body_tags {
			font-family: 'Pangolin';
			font-weight: 400;
			font-size: 12px;
			line-height: 125%;
			letter-spacing: 0.02em;
			color: #988c89;
			margin-top: 27px;
			.blog-post__body_tags_items {
				display: flex;
				gap: 12px;
			}
		}
		.blog-post__body_addition {
			max-width: 840px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			position: absolute;
			bottom: -82px;
			left: 0;
			font-weight: 800;
			@media (max-width: 450px) {
				bottom: -122px;
				flex-direction: column;
				align-items: center;
			}

			.blog-post__body_addition_description {
				font-size: 48px;
				line-height: 123.6%;
				font-weight: 700;
			}
			.blog-post__body_addition_link {
				max-width: 170px;
				background: linear-gradient(
					270deg,
					#ffffff 0%,
					#f8dc6c 100%
				);
				box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.48);
				border-radius: 16px;
				padding: 12px 42px;
				font-weight: 900;
				font-size: 28px;
				line-height: 35px;
				color: #780e17;
			}
		}
	}
	.blog-post__recommendations {
		max-width: 1550px;
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0 5px;
		gap: 20px;
		flex-wrap: wrap;
	}
}
</style>
