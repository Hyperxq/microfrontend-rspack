import { Suspense } from "react";
import "./App.css";
import { Loading } from "./components/Loading";
import { lazyNamed } from "./utils/lazyNamed";

// import Button from "ui-components/Button";
// import { Hero } from 'Hero/Hero';

// const HeroApp = lazy(() => import('Hero/App'));
const Hero = lazyNamed(() => import("Hero/Hero"), "Hero");
const Features = lazyNamed(() => import("Features/features"), "App");

const App = () => {
	return (
		<div className="content">
			<h1>Shell</h1>
			<Suspense fallback={<Loading />}>
				<Hero />
				<Features />
			</Suspense>
		</div>
	);
};

export default App;
