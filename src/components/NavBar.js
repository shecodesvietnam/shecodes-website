import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarHeader = styled.div`
	box-sizing: border-box;
	background-color: #161616;
	margin: 0 auto;
	height: 6rem;
	border-bottom: 1px solid #3f3f3f;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10000;
	padding-top: 1rem;
`;

const NavBarBox = styled.div`
	height: 100%;
	max-width: 1140px;
	margin: auto;
`;

const LogoBox = styled.div`
	float: left;
	margin-left: 1rem;
	width: calc((100% - 2 * 6rem) / 3);
`;

const Logo = styled.img`
	float: left;
	width: 15rem;
	transition: all 0.4s ease;
	&:hover {
		transform: rotate(5deg) scale(1.3);
	}
	@media only screen and (max-width: 56.25em) {
		transition-property: none;
		&:hover {
			transform: none !important;
		}
	}
`;

const NavBox = styled.div`
	float: left;
	width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);
`;

const MenuList = styled.ul`
	box-sizing: border-box;
	text-align: right;
	padding: 0;
	margin: 0;
	padding-top: 0.2rem !important;
	@media only screen and (max-width: 56.25em) {
		opacity: ${(props) => (!props.show ? 0 : 1)};
		visibility: ${(props) => (!props.show ? 'hidden' : 'visible')};
		float: none;
		text-align: left;
		position: absolute;
		top: 5rem;
		left: 0;
		background-color: #161616;
		width: 100%;
		border-bottom: 1px solid #3f3f3f;
	}
`;

const MenuItem = styled.li`
	color: #f0f0f0;
	margin-right: ${(props) => (!props.last ? 2 : 0)}rem;
	display: inline-block;
	@media only screen and (max-width: 56.25em) {
		display: block;
		margin: 2rem 0;
		padding-left: 2rem;
	}
	box-sizing: border-box;
`;

const LinkItem = styled(NavLink)`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	&:link,
	&:visited {
		display: inline-block;
		text-decoration: none;
		color: #f0f0f0;
	}
	font-size: 2rem;
	transition: all 0.4s ease-in-out;
	&:hover {
		cursor: pointer;
		outline: none;
		background-image: linear-gradient(to right, #e80872, #592368);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		transform: rotate(5deg) scale(1.3);
	}
	@media only screen and (max-width: 56.25em) {
		transition-property: none;
		&:hover {
			transform: none !important;
		}
	}
`;

const LinkItemActive = (props) => {
	return (
		<LinkItem
			activeStyle={{
				outline: 'none',
				backgroundImage: 'linear-gradient(to right, #e80872, #592368)',
				WebkitBackgroundClip: 'text',
				backgroundClip: 'text',
				color: 'transparent',
			}}
			{...props}
		/>
	);
};

const ButtonLabel = styled.label`
	height: 7rem;
	width: 7rem;
	position: fixed;
	top: -0.5rem;
	right: 0rem;
	z-index: 2000;
	box-shadow: 0 1rem 3rem rgba(#161616, 0.1);
	text-align: center;
	cursor: pointer;
	opacity: 0;
	visibility: hidden;
	@media only screen and (max-width: 56.25em) {
		opacity: 1;
		visibility: visible;
	}
`;

const ButtonIcon = styled.span`
	position: relative;
	margin-top: 3.5rem;

	&,
	&::before,
	&::after {
		width: 3rem;
		height: 2px;
		background-color: #3f3f3f;
		display: inline-block;
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		left: 0;
		transition: all 0.2s;
	}

	&::before {
		top: -0.8rem;
	}
	&::after {
		top: 0.8rem;
	}
`;

const NavBar = (props) => {
	const [show, setShow] = useState(false);
	return (
		<NavBarHeader>
			<NavBarBox>
				<LogoBox>
					<Link to='/'>
						<Logo
							src='https://shecodesvietnam.github.io/homepage-2020/assets/logo-2020.png'
							alt='SheCodes Logo'
							onClick={() => setShow(false)}
						/>
					</Link>
				</LogoBox>
				<NavBox>
					<MenuList show={show}>
						<MenuItem>
							<LinkItemActive to='/hackathon' onClick={() => setShow(false)}>
								Hackathon 2020
							</LinkItemActive>
						</MenuItem>
						<MenuItem>
							<LinkItemActive
								to='/tech-marathon'
								onClick={() => setShow(false)}
							>
								Tech Marathon
							</LinkItemActive>
						</MenuItem>
						<MenuItem>
							<LinkItemActive to='/event' onClick={() => setShow(false)}>
								Sự kiện khác
							</LinkItemActive>
						</MenuItem>
						<MenuItem>
							<LinkItemActive to='/staffs' onClick={() => setShow(false)}>
								Đội ngũ
							</LinkItemActive>
						</MenuItem>
						<MenuItem last>
							<LinkItemActive to='/blog' onClick={() => setShow(false)}>
								Blog
							</LinkItemActive>
						</MenuItem>
					</MenuList>
				</NavBox>
				<ButtonLabel onClick={() => setShow(!show)}>
					<ButtonIcon />
				</ButtonLabel>
			</NavBarBox>
		</NavBarHeader>
	);
};

export default NavBar;
