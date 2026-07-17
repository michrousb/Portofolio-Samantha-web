/*mengaktifkan routing di aplikasi React*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import HomePage from "../pages/homepage/HomePage";
import AboutPage from "../pages/aboutpage/AboutPage";
import ProjectsPage from "../pages/projectpage/projectPage";
import Footer from "../components/footer/footer";
import { useEffect} from "react";
import { useThemeStore } from "../store/store";
function App() {
	const darkMode = useThemeStore((state)=> state.darkMode);
	useEffect(() => {
		document.body.classList.toggle("dark-mode", darkMode);
		document.body.classList.toggle("light-mode", !darkMode);
	}, [darkMode]);

	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/projects" element={<ProjectsPage/>} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
		);
}
export default App;