import "./App.css";
import AppRouter from "./router/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
	return (
		<>
			<AppRouter />
			<ToastContainer />
		</>
	);
}
