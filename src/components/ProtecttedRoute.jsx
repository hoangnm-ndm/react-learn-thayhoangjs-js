// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
	const { user } = useAuth();

	if (!user) return <Navigate to="/login" />;

	if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
		return <Navigate to="/unauthorized" />;
	}

	return children;
}
