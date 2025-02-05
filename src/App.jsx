import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Illustration from "./pages/Illustration";
import Modelling from "./pages/Modelling";
import Animation from "./pages/Animation";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<AboutMe></AboutMe>}></Route>
				<Route
					path="/illustrations"
					element={<Illustration></Illustration>}
				></Route>
				<Route path="/modelling" element={<Modelling></Modelling>}></Route>
				<Route path="/animation" element={<Animation></Animation>}></Route>
			</Routes>
		</div>
	);
}

export default App;
