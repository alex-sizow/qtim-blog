import { Post } from './Post';

export type APIResponse = {
	page: number;
	results: Post[];
	total_pages: number;
	total_results: number;
};
