import React from "react";
import "./App.css";
import ImageDiff from "./components/ImageDiff";

function App() {
	return (
		<div className="App min-h-screen bg-primary-50 flex flex-col items-center p-3">
			<h1 className="text-4xl font-bold text-primary-900 mb-8">
				Image Diff
			</h1>
			<ImageDiff />
		</div>
	);
}

export default App;
