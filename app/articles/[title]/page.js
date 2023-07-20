export default function ShowArticlesPage(props) {
	return (
		<>
			<h1>Show Title [dynamic routes]</h1>
			<h1>{props.params.title}</h1>
		</>
	);
}
