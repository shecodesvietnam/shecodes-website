import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterBox = styled.footer`
	background-color: #161616;
	padding: 3rem;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
`;

const FooterLogoBox = styled.div`
	margin: 0 auto;
	width: 75%;
	box-sizing: border-box;
	line-height: 1.7;
`;

const Row = styled.div`
	max-width: 114rem;
	margin: 0 auto;
	margin-top: 6rem !important;
	margin-bottom: 1.5rem !important;
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

const InfoRow = styled.ul`
	padding-top: 1rem;
	border-top: 1px solid #3f3f3f;
	text-align: center !important;
	list-style-type: none;
	margin: 0;
	padding: 0;
	padding-top: 1rem;
	box-sizing: border-box;
`;

const FooterItem = styled.li`
	display: inline-block;
	margin-right: 1.5rem;
	box-sizing: border-box;
`;

const LinkItem = styled(Link)`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	text-align: center;
	&:link,
	&:visited {
		display: inline-block;
		text-decoration: none;
		color: #f0f0f0;
	}
	font-size: 2rem;
	transition: all 0.4s ease;
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

const MediaBox = styled.div`
	border-top: 1px solid #3f3f3f;
	margin-bottom: 4rem !important;
	@media only screen and (max-width: 56.25em) {
		margin-bottom: 3rem !important;
	}
`;

const FollowUs = styled.p`
	font-size: 2rem;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	color: #f0f0f0;
	margin: 0;
	padding: 0;
`;

const MediaList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const MediaItem = styled.i`
	font-size: 2rem;
	margin: 0 0.5rem;
	transition: transform 0.4s ease !important;
	&:hover {
		cursor: pointer;
		outline: none;
		background-image: linear-gradient(to right, #e80872, #592368);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		transform: rotate(5deg) scale(1.3);
	}
`;

const CopyRight = styled.p`
	font-size: 2rem;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	color: #f0f0f0;
	margin: 0;
	padding: 0;
`;

const Footer = (props) => {
	return (
		<FooterBox>
			<FooterLogoBox>
				<img
					src='https://shecodesvietnam.github.io/homepage-2020/assets/logo-2020.png'
					alt='SheCodes Logo'
				/>
			</FooterLogoBox>
			<Row>
				<div className='col-1-of-2'>
					<InfoRow>
						<FooterItem>
							<LinkItem to='/contact'>Liên hệ</LinkItem>
						</FooterItem>
						<FooterItem>
							<LinkItem to='/about'>Giới thiệu</LinkItem>
						</FooterItem>
						<FooterItem>
							<LinkItem to='/sponsors'>Nhà tài trợ</LinkItem>
						</FooterItem>
						<FooterItem>
							<LinkItem to='/faqs'>FAQs</LinkItem>
						</FooterItem>
					</InfoRow>
				</div>
				<div className='col-1-of-2'>
					<MediaBox>
						<FollowUs>Follow us</FollowUs>
						<MediaList>
							<FooterItem>
								<LinkItem
									as='a'
									href='https://www.facebook.com/shecodesvietnam/'
									target='_blank'
								>
									<MediaItem className='fab fa-facebook' />
								</LinkItem>
							</FooterItem>
							<FooterItem>
								<LinkItem
									as='a'
									href='https://www.instagram.com/Shecodes.vietnam'
									target='_blank'
								>
									<MediaItem className='fab fa-instagram' />
								</LinkItem>
							</FooterItem>
							<FooterItem>
								<LinkItem
									as='a'
									href='https://www.linkedin.com/company/shecodeshackathon/'
									target='_blank'
								>
									<MediaItem className='fab fa-linkedin' />
								</LinkItem>
							</FooterItem>
						</MediaList>
					</MediaBox>
				</div>
			</Row>
			<CopyRight>
				Thiết kế và phát triển với{' '}
				<span role='img' style={{ fontSize: '2rem' }} aria-label='heart'>
					💖
				</span>{' '}
				bởi SheCodes Hà Nội
			</CopyRight>
		</FooterBox>
	);
};

export default Footer;
