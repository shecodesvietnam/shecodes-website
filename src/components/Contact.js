import React from 'react';
import styled from 'styled-components';

const ContactBox = styled.div`
	margin: auto;
	margin-top: 6rem;
	box-sizing: border-box;
	padding: 0;
	background-color: #000;
	padding-bottom: 10rem;
`;

const ContactRow = styled.div`
	max-width: 114rem;
	margin: 0 auto;
	line-height: 1.7;
	&:not(:last-child) {
		margin-bottom: 8rem;
		@media only screen and (max-width: 56.25em) {
			margin-bottom: 6rem;
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

const ContactHeader = styled.h2`
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

const ContactColumn = styled.div`
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

const ContactImageBox = styled.div`
	width: 20rem;
	height: 20rem;
	margin: 0 auto;
	overflow: hidden;
	-webkit-shape-outside: circle(50% at 50% 50%);
	shape-outside: circle(50% at 50% 50%);
	-webkit-clip-path: circle(50% at 50% 50%);
	clip-path: circle(50% at 50% 50%);
	border-radius: none;
	margin-bottom: 4rem !important;
	@media only screen and (max-width: 56.25em) {
		margin-bottom: 3rem !important;
	}
`;

const ContactImage = styled.img`
	display: block;
	max-width: 100%;
	margin: 0;
	padding: 0;
`;

const ContactName = styled.h3`
	font-size: 2.4rem;
	margin: 0;
	padding: 0;
	font-weight: 700;
	text-transform: uppercase;
	color: #fbfeff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	text-align: center;
`;

const ContactAddressBox = styled.address`
	padding-top: 3rem;
`;

const ContactAddress = styled.a`
	display: block;
	text-decoration: none;
	color: #fbfeff;
	font-size: 2rem;
	margin: 0;
	padding: 0;
	font-style: italic;
	text-align: center;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	&:hover {
		text-decoration: underline;
	}
`;

const contactMap = [
	{
		name: 'MS. MAI PHUONG THUY TIEN',
		email: 'tienmai.shecodes@gmail.com',
		image:
			'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/staffs/HN/Director_Mai_Phuong_Thuy_Tien.jpg',
	},
	{
		name: 'MS. NGUYỄN HUYỀN MY',
		email: 'huyenmy.shecodes@gmail.com',
		image:
			'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/staffs/HN/PM_Nguyen_Huyen_My.jpg',
	},
];

const Contact = (props) => {
	return (
		<ContactBox>
			<ContactRow>
				<ContactHeader>LIÊN HỆ</ContactHeader>
			</ContactRow>
			<ContactRow>
				{contactMap.map((value, index) => (
					<ContactColumn className='col-1-of-2' key={'contact_' + index}>
						<ContactImageBox>
							<ContactImage src={value.image} alt={value.name} />
						</ContactImageBox>
						<ContactName>{value.name}</ContactName>
						<ContactAddressBox>
							<ContactAddress href={'mailto:' + value.mail}>
								{value.email}
							</ContactAddress>
						</ContactAddressBox>
					</ContactColumn>
				))}
			</ContactRow>
		</ContactBox>
	);
};

export default Contact;
