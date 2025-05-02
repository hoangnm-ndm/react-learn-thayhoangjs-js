import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";

const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Body = styled.div`
	display: flex;
	flex: 1;
	overflow: hidden;
`;

const Content = styled.main`
	flex: 1;
	padding: 16px;
	overflow-y: auto;
	background-color: #f9f9f9;
`;

const AdminLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	const handleToggleSidebar = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<>
			<LayoutWrapper>
				<AdminHeader />
				<Body>
					<Sidebar collapsed={collapsed} onToggle={handleToggleSidebar} />
					<Content>
						<Outlet />
					</Content>
				</Body>
				<AdminFooter />
			</LayoutWrapper>
		</>
	);
};

export default AdminLayout;
