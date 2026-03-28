import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import App from "./App.tsx";
import "./index.css";

const lenis = new Lenis({
	duration: 0.7,
	easing: (t) => 1 - Math.pow(1 - t, 3),
	touchMultiplier: 1,
});

function raf(time: number) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")!).render(<App />);
