import styled from "@emotion/styled";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // optional: icon
import { Link } from "react-router-dom";

const SidebarWrapper = styled.div`
	width: ${(props) => (props.collapsed ? "80px" : "250px")};
	transition: width 0.3s ease;
	background-color: rgb(127, 203, 214);
	color: white;
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const ToggleButton = styled.button`
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	margin-bottom: 20px;
	font-size: 20px;
	align-self: ${(props) => (props.collapsed ? "center" : "flex-end")};
`;

const MenuItem = styled.div`
	margin: 16px 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: ${(props) => (props.collapsed ? "0" : "16px")};
	opacity: ${(props) => (props.collapsed ? "0" : "1")};
	transition: opacity 0.2s ease, font-size 0.2s ease;
`;

const Sidebar = ({ collapsed, onToggle }) => {
	return (
		<SidebarWrapper collapsed={collapsed}>
			<ToggleButton collapsed={collapsed} onClick={onToggle}>
				{collapsed ? <FiChevronRight /> : <FiChevronLeft />}
			</ToggleButton>
			<MenuItem collapsed={collapsed}>
				<Link to="">Dashboard</Link>
			</MenuItem>
			<MenuItem collapsed={collapsed}>
				<Link to="users">Users</Link>
			</MenuItem>
			<MenuItem collapsed={collapsed}>
				<Link to="products">Products</Link>
			</MenuItem>
			<MenuItem collapsed={collapsed}>
				<Link to="settings">Settings</Link>
			</MenuItem>
		</SidebarWrapper>
	);
};

export default Sidebar;
