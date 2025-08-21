import React from "react";
import ReactDOM from "react-dom/client";
import { Hero } from "./Hero.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Hero />
	</React.StrictMode>,
);
