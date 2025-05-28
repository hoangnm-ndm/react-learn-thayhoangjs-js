import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRouter from "./router/index";

export default function App() {
	return (
		<>
			<AppRouter />
			<ToastContainer />
		</>
	);
}
