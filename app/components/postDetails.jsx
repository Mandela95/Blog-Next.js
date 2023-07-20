export default async function PostDetails({ postId }) {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
		{
			next: {
				revalidate: 120,
			},
		}
	);
	const post = await response.json();
	return (
		<div>
			<div
				style={{
					backgroundColor: "#bbb",
					margin: "10px auto",
					padding: "10px",
					borderRadius: "10px",
				}}
			>
				<h1>{`${post.id} - ${post.title}`}</h1>
				<hr />
				<h3>{post.body}</h3>
			</div>
		</div>
	);
}
