import React from "react";
import { Routes, Route } from "react-router-dom";
import Illustration from "./pages/Illustration";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Illustration></Illustration>}></Route>
				<Route
					path="/illustrations"
					element={<Illustration></Illustration>}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
