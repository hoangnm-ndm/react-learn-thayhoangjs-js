import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
	const { user, setUser } = useContext(UserContext);

	if (!user) return <p>Chưa đăng nhập</p>;

	return (
		<div>
			<p>Xin chào, {user.name}</p>
			<button onClick={() => setUser(null)}>Đăng xuất</button>
		</div>
	);
};

export default Profile;
