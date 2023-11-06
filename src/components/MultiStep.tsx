export default function MultiStep() {
	// info from store to update the circles...
	return (
		<div className="fixed top-4">
			<div className="flex justify-around gap-4">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

function Step() {
	return <div>circle</div>;
}
