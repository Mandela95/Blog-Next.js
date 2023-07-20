import Link from "next/link";

export const metadata = {
	title: "Posts",
};

export default async function PostsPage() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		next: {
			revalidate: 120,
		},
	});
	const posts = await response.json();

	const postsJSX = posts.map((post) => {
		return (
			<Link href={`/posts/${post.id}`}>
				<div className="posts">
					<h1>
						{post.id + " - "}
						{post.title}
					</h1>
					<p>{post.body}</p>
				</div>
			</Link>
		);
	});

	return (
		<div style={{ padding: "20px" }}>
			<h1>Posts Page</h1>
			{postsJSX}
			<Link href="/articles">
				<button>Go to Articles</button>
			</Link>
		</div>
	);
}
