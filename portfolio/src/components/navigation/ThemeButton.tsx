import { useThemeStore } from "../../store/store";
import "./ThemeButton.css"
function ThemeButton(){
    const darkMode = useThemeStore((state) => state.darkMode);
    const toggleDarkMode = useThemeStore(
        (state) => state.toggleDarkMode
    );
    return(
        <button
            className="theme-toggle"
             onClick={toggleDarkMode}>
            {darkMode ? "☀️" : "🌙"}
        </button>
    );
}

export default ThemeButton;