import Link from "next/link";

export default function ArticlesPage() {
	return (
		<div style={{ padding: "20px" }}>
			<h1>Articles</h1>
			<Link href="/posts">
				<button>Go To Posts</button>
			</Link>
		</div>
	);
}
