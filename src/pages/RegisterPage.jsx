import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../schemas/authSchema";
import { authRegister } from "../api/authApi";
import { toast } from "react-toastify"; // Thêm import toast từ react-toastify

const RegisterPage = () => {
	const nav = useNavigate();
	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	const handleRegister = async (dataBody) => {
		try {
			const { confirmPass, ...otherData } = dataBody;
			await authRegister(otherData);
			nav("/login");
		} catch (error) {
			console.log(error);
			toast.error("Đăng ký thất bại");
			reset();
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleRegister)}>
				<h1>Register</h1>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input type="email" className="form-control" {...register("email")} />
					{errors?.email && <p className="text-danger">{errors.email?.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input type="text" className="form-control" {...register("username")} />
					{errors?.username && <p className="text-danger">{errors.username?.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input type="password" className="form-control" {...register("password")} />
					{errors?.password && <p className="text-danger">{errors.password?.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="confirmPass" className="form-label">
						Confirm Password
					</label>
					<input type="password" className="form-control" {...register("confirmPass")} />
					{errors?.confirmPass && <p className="text-danger">{errors.confirmPass?.message}</p>}
				</div>

				<div className="mb-3">
					<Link to="/login">You has an account?</Link>
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100">Register</button>
				</div>
			</form>
		</>
	);
};

export default RegisterPage;
