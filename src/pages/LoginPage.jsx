import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../api/authApi";
import { loginSchema } from "../schemas/authSchema";
import { toast } from "react-toastify";

const LoginPage = () => {
	const nav = useNavigate();
	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const handleLogin = async (dataUser) => {
		try {
			const { data } = await authLogin(dataUser);
			if (data.accessToken) {
				localStorage.setItem("accessToken", data.accessToken);
				localStorage.setItem("email", data?.user?.email);
				nav("/");
			}
		} catch (err) {
			console.log(err);
			toast.error("Đăng nhập thất bại, vui lòng thử lại!");
			reset();
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleLogin)}>
				<h1>Login</h1>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input type="email" className="form-control" {...register("email")} />
					{errors?.email && <p className="text-danger">{errors.email?.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input type="password" className="form-control" {...register("password")} />
					{errors?.password && <p className="text-danger">{errors.password?.message}</p>}
				</div>

				<div className="mb-3">
					<Link to="/register">You has not account?</Link>
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100">Login</button>
				</div>
			</form>
		</>
	);
};

export default LoginPage;
