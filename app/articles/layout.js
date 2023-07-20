export const metadata = {
	title: "Articles",
};

export default function ({ children }) {
	return (
		<div style={{ padding: "20px" }}>
			<h1>Articles Page</h1>
			<div
				style={{
					marginTop: "50px",
					backgroundColor: "#ddd",
					borderRadius: "10px",
					padding: "20px",
				}}
			>
				{children}
			</div>
		</div>
	);
}
