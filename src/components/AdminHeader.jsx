import styled from "@emotion/styled";
import React from "react";

const Header = styled.header`
	background-color: #282c34;
	color: white;
	padding: 20px;
`;

const AdminHeader = () => {
	return <Header>Hello, Admin</Header>;
};

export default AdminHeader;
