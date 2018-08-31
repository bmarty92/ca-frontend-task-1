export default {
	posts: state => state.posts,
	post: state => state.post,
	singlePost: state => (id) => state.posts.filter(post => post.id === id)[0]
}
