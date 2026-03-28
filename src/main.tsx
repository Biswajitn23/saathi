import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import App from "./App.tsx";
import "./index.css";

console.log(
	"%c\n  ╔════════════════════════════════════════╗\n  ║      🏗️  SAATHI GROUP  🏗️            ║\n  ║   Building Trust • Modern Excellence   ║\n  ╚════════════════════════════════════════╝\n",
	"background:#0f172a;color:#ea580c;padding:12px;border-radius:8px;font-family:monospace;font-weight:800;font-size:13px;letter-spacing:.05em;"
);
console.log(
	"%cBuilt by%c Biswajit & Nitin",
	"color:#64748b;font-weight:700;font-size:12px;",
	"color:#ea580c;font-weight:800;font-size:12px;"
);

const lenis = new Lenis({
	duration: 0.4,
	easing: (t) => 1 - Math.pow(1 - t, 2),
	touchMultiplier: 1.2,
	smoothWheel: true,
	wheelMultiplier: 0.8,
});

function raf(time: number) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")!).render(<App />);
