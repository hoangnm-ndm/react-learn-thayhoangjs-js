// src/pages/LoginPage.jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export default function LoginPage() {
	const { login } = useAuth();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(loginSchema) });

	const onSubmit = (data) => {
		// Giả sử người dùng là admin
		login({ email: data.email, role: "admin", token: "dummy-token" });
		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register("email")} placeholder="Email" />
			<p>{errors.email?.message}</p>

			<input type="password" {...register("password")} placeholder="Password" />
			<p>{errors.password?.message}</p>

			<button type="submit">Login</button>
		</form>
	);
}
