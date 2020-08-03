import React from 'react';
import styled from 'styled-components';

const StaffsBox = styled.div`
	margin: auto;
	margin-top: 6rem;
	box-sizing: border-box;
	padding: 0;
	background-color: #000;
	padding-bottom: 10rem;
`;

const StaffsRow = styled.div`
	max-width: 114rem;
	margin: 0 auto;
	line-height: 1.7;
	&:not(:first-child) {
		border-top: 1px solid #3f3f3f;
	}
	&:not(:last-child) {
		margin-bottom: 4rem;
		@media only screen and (max-width: 56.25em) {
			margin-bottom: 2rem;
		}
	}
	@media only screen and (max-width: 56.25em) {
		max-width: 50rem;
		padding: 0 3rem;
	}
	&::after {
		content: '';
		display: table;
		clear: both;
	}
	[class^='col-'] {
		float: left;
		margin-bottom: 1rem;

		&:not(:last-child) {
			margin-right: 6rem;

			@media only screen and (max-width: 56.25em) {
				margin-right: 0;
				margin-bottom: 6rem;
			}
		}

		@media only screen and (max-width: 56.25em) {
			width: 100% !important;
		}
	}
	.col-1-of-2 {
		width: calc((100% - 6rem) / 2);
	}

	.col-1-of-3 {
		width: calc((100% - 2 * 6rem) / 3);
	}

	.col-2-of-3 {
		width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);
	}

	.col-1-of-4 {
		width: calc((100% - 3 * 6rem) / 4);
	}

	.col-2-of-4 {
		width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem);
	}

	.col-3-of-4 {
		width: calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem);
	}
`;

const StaffsRoleRow = styled(StaffsRow)`
	margin-top: 10rem;
	@media only screen and (max-width: 56.25em) {
		margin-top: 5rem;
	}
`;

const StaffsHeader = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 4rem;
	text-transform: uppercase;
	font-weight: 700;
	color: #fbfeff;
	display: inline-block;
	letter-spacing: 0.2rem;
	transition: all 0.2s;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	padding-top: 8rem !important;
	@media only screen and (max-width: 56.25em) {
		padding-top: 5rem !important;
	}
`;

const RoleHeader = styled.h3`
	font-size: 2.4rem;
	margin: 0;
	padding: 0;
	font-weight: 700;
	text-transform: uppercase;
	color: #fbfeff;
	margin-top: 0.5rem;
	margin-bottom: 1.5rem !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	text-align: left;
	@media only screen and (max-width: 56.25em) {
		text-align: center;
	}
`;

const StaffsColumn = styled.div`
	margin: 0;
	float: left;
	margin-bottom: 1rem;

	&:not(:last-child) {
		margin-right: 6rem;

		@media only screen and (max-width: 56.25em) {
			margin-right: 0;
			margin-bottom: 6rem;
		}
	}

	@media only screen and (max-width: 56.25em) {
		width: 100% !important;
	}
`;

const StaffsImageBox = styled.div`
	width: 20rem;
	height: 20rem;
	margin: 0 auto;
	overflow: hidden;
	-webkit-shape-outside: circle(50% at 50% 50%);
	shape-outside: circle(50% at 50% 50%);
	-webkit-clip-path: circle(50% at 50% 50%);
	clip-path: circle(50% at 50% 50%);
	border-radius: none;
`;

const StaffsImage = styled.img`
	display: block;
	max-width: 100%;
	margin: 0;
	padding: 0;
`;

const StaffsName = styled.p`
	box-sizing: border-box;
	color: #f0f0f0;
	display: block;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 2rem;
	text-align: center !important;
	font-weight: 400;
	margin: 0;
	padding: 0;
	text-align: justify;
`;

const StaffsRole = styled(StaffsName)`
	font-size: 1.4rem;
`;

const staffsMap = {
	Founder: [
		{
			name: 'Mai Phương Thủy Tiên',
			image: 'HN/Director_Mai_Phuong_Thuy_Tien.jpg',
			content: 'Founder',
		},
		{
			name: 'Nguyễn Huyền My',
			image: 'HN/PM_Nguyen_Huyen_My.jpg',
			content: 'Founder',
		},
	],
	'Program Manager': [
		{
			name: 'Trần Tuệ Nhi',
			image: 'HN/PM_Tran_Tue_Nhi.jpg',
			content: 'Head of Hackathon - Hà Nội',
		},
		{
			name: 'Nguyễn Vũ Ngân Hà',
			image: 'HN/PM_Nguyen_Vu_Ngan_Ha.jpg',
			content: 'Head of Tech Marathon - Hà Nội',
		},
		{
			name: 'Nguyễn Thế Anh',
			image: 'HN/PM_Nguyen_The_Anh.png',
			content: 'Head of Tech Talk - Hà Nội',
		},
		{
			name: 'Bùi Võ Ngọc Quế Trân',
			image: 'HCM/PM_Bui_Vo_Ngoc_Que_Tran.jpg',
			content: 'Head of Hackathon - Hồ Chí Minh',
		},
		{
			name: 'Trần Khánh Vy',
			image: 'HCM/PM_Tran_Khanh_Vy.jpg',
			content: 'Head of IT Fair - Hồ Chí Minh',
		},
		{
			name: 'Hoàng Diệu Khánh',
			image: 'HCM/PM_Hoang_Dieu_Khanh.jpg',
			content: 'Head of Workshop - Hồ Chí Minh',
		},
	],
	Technology: [
		{
			name: 'Nguyễn Hương Giang',
			image: 'HN/Tech_Nguyen_Huong_Giang.jpg',
			content: 'Hà Nội',
		},
		{
			name: 'Nhâm Bảo Khanh',
			image: 'HN/Tech_Nham_Bao_Khanh.png',
			content: 'Hà Nội',
		},
		{
			name: 'Vũ Quang Huy',
			image: 'HN/Tech_Vu_Quang_Huy.jpg',
			content: 'Hà Nội',
		},
		{
			name: 'Võ Văn Nghĩa',
			image: 'HN/Tech_Vo_Van_Nghia.jpg',
			content: 'Hà Nội',
		},
		{
			name: 'Nguyễn Trần Phước Thịnh',
			image: 'HCM/Tech_Nguyen_Tran_Phuoc_Thinh.jpg',
			content: 'Hồ Chí Minh',
		},
		{
			name: 'Nguyễn Vũ Anh Thư',
			image: 'HCM/Tech_Nguyen_Vu_Anh_Thu.jpg',
			content: 'Hồ Chí Minh',
		},
	],
	'Human Resources': [
		{
			name: 'Nguyễn Doãn Hoàng',
			image: 'HN/HR_Nguyen_Doan_Hoang.png',
			content: 'Hà Nội',
		},
		{
			name: 'Nguyễn Thị Đinh Thủy',
			image: 'HCM/HR_Nguyen_Thi_Dinh_Thuy.jpg',
			content: 'Hồ Chí Minh',
		},
		{
			name: 'Văn Thị Kim Ân',
			image: 'HCM/HR_Van_Thi_Kim_An.jpg',
			content: 'Hồ Chí Minh',
		},
	],
	Marketing: [
		{
			name: 'Nguyễn Ngọc Mai',
			image: 'HN/Marketing_Nguyen_Ngoc_Mai.jpg',
			content: 'Hà Nội',
		},
		{
			name: 'Phạm Nguyễn Hằng Vân',
			image: 'HN/Marketing_Pham_Nguyen_Hang_Van.jpg',
			content: 'Hà Nội',
		},
		{
			name: 'Huỳnh Nguyễn Ngân Thy',
			image: 'HCM/Marketing_Huynh_Nguyen_Ngan_Thy.jpg',
			content: 'Hồ Chí Minh',
		},
	],
	Partnership: [
		{
			name: 'Nguyễn Thạc Linh Chi',
			image: 'HN/Partnership_Nguyen_Thac_Linh_Chi.png',
			content: 'Hà Nội',
		},
		{
			name: 'Nguyễn Tôn Vành Khuyên',
			image: 'HCM/Partnership_Nguyen_Ton_Vanh_Khuyen .jpg',
			content: 'Hồ Chí Minh',
		},
	],
	Designer: [
		{
			name: 'Bùi Minh Hiếu',
			image: 'HN/Design_Bui_Minh_Hieu.jpg',
			content: 'Hà Nội',
		},
		{
			name: 'Nguyễn Ngọc Thảo Nhi',
			image: 'HCM/Design_Nguyen_Ngoc_Thao_Nhi.png',
			content: 'Hà Nội',
		},
	],
};

const generateStaffsComponent = (staffsMap) => {
	let staffsComponent = [];
	for (const role in staffsMap) {
		if (staffsMap.hasOwnProperty(role)) {
			const staffs = staffsMap[role];
			let staffsRoleComponent = [];
			for (let i = 0; i < staffs.length; i += 3) {
				let staffsRoleRowComponent = [];
				for (let j = i; j < Math.min(staffs.length, i + 3); j++) {
					const staff = staffs[j];
					staffsRoleRowComponent.push(
						<StaffsColumn className='col-1-of-3' key={i + '_row_' + j}>
							<StaffsImageBox>
								<StaffsImage
									alt={staff.name}
									src={
										'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/staffs/' +
										staff.image
									}
								/>
							</StaffsImageBox>
							<StaffsName>{staff.name}</StaffsName>
							<StaffsRole>- {staff.content}</StaffsRole>
						</StaffsColumn>
					);
				}
				staffsRoleComponent.push(
					<StaffsRow style={{ border: 0 }} key={i + '_role'}>
						{staffsRoleRowComponent}
					</StaffsRow>
				);
			}
			staffsComponent.push(
				<StaffsRoleRow key={'role_' + role}>
					<StaffsRow>
						<RoleHeader>{role}</RoleHeader>
					</StaffsRow>
					{staffsRoleComponent}
				</StaffsRoleRow>
			);
		}
	}
	return staffsComponent;
};

const Staffs = (props) => {
	return (
		<StaffsBox>
			<StaffsRow>
				<StaffsHeader>ĐỘI NGŨ</StaffsHeader>
			</StaffsRow>
			{generateStaffsComponent(staffsMap)}
		</StaffsBox>
	);
};

export default Staffs;
