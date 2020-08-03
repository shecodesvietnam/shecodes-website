import React from 'react';
import styled from 'styled-components';

const githubRawAsserts =
	'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/';

const AboutRow = styled.div`
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

const AboutBox = styled.div`
	margin: auto;
	margin-top: 6rem;
	box-sizing: border-box;
	padding: 0;
	background-color: #000;
`;

const AboutHeaderBox = styled.div`
	width: 100%;
	margin-top: 6rem;
	background-color: #161616;
	border-bottom: 1px solid #3f3f3f;
	@media only screen and (max-width: 25em) {
	}
`;

const AboutHeaderTextBox = styled.div`
	width: 100%;
	margin: 0 auto;
	padding-top: 6rem !important;
	padding-bottom: 7rem !important;
	@media only screen and (max-width: 75em) {
		top: 40%;
		padding-top: 3rem !important;
	}
	max-width: 1140px;
`;

const AboutHeaderText = styled.h1`
	font-size: 7rem;
	width: 95%;
	margin: 0 auto;
	line-height: 1.7;
	background-image: linear-gradient(to right, #e80872, #592368);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	@media only screen and (max-width: 56.25em) {
		font-size: 3rem;
	}
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	box-sizing: border-box;
`;

const AboutUsBox = styled.div`
	background-color: #000;
	padding-top: 15rem;
	padding-bottom: 10rem;
`;

const AboutColumn = styled.div`
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

const AboutItemHeader = styled.h2`
	font-size: 4rem;
	text-transform: uppercase;
	font-weight: 700;
	color: #fbfeff;
	display: inline-block;
	letter-spacing: 0.2rem;
	margin-bottom: 1.5rem !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
`;

const AboutItemParagraph = styled.p`
	font-size: 1.6rem;
	text-align: justify !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	color: #f0f0f0;
`;

const AboutImage = styled.img`
	display: block;
	max-width: 100%;
	margin: 0;
	padding: 0;
`;

const AboutHackathonBox = styled(AboutUsBox)`
	background-color: #161616;
`;

const RegistrationButton = styled.a`
	display: inline-block;
	text-transform: uppercase;
	text-decoration: none;
	font-size: 1.6rem;
	padding: 1.5rem 4rem;
	border-radius: 10rem;
	transition: all 0.2s;
	position: relative;
	border: none;
	cursor: pointer;
	background-image: linear-gradient(to right, #e80872, #592368);
	color: #fbfeff;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	@media only screen and (max-width: 37.5em) {
		font-size: 1.2rem;
		padding: 1rem 2rem;
	}
	@keyframes moveInBottom {
		0% {
			opacity: 0;
			transform: translateY(10rem);
		}
		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
	animation: moveInBottom 0.5s ease-out 0.75s;
	animation-fill-mode: backwards;
	&:hover,
	&:link,
	&visited,
	&:active {
		text-decoration: none;
		color: #fbfeff;
	}
	margin-top: 3rem;
`;

const About = (props) => {
	return (
		<AboutBox>
			<AboutHeaderBox>
				<AboutHeaderTextBox>
					<AboutHeaderText>
						Chúng tôi tạo ra một không gian nơi mà phụ nữ có thể thể hiện hết
						khả năng về công nghệ của mình
					</AboutHeaderText>
				</AboutHeaderTextBox>
			</AboutHeaderBox>
			<AboutUsBox>
				<AboutRow>
					<AboutColumn className='col-1-of-2'>
						<AboutItemHeader>VỀ CHÚNG TÔI</AboutItemHeader>
						<AboutItemParagraph>
							SheCodes Vietnam là một tổ chức phi lợi nhuận, nhằm khuyến khích
							phái nữ tham gia vào lĩnh vực Công nghệ thông tin, qua đó dần dần
							xóa bỏ khoảng cách giới tính trong lĩnh vực này. Năm 2018,
							Shecodes Vietnam được triển khai lần đầu tiên tại TP Hà Nội, Việt
							Nam với sự kiện tiên phong mang tên Shecodes Hackathon cùng sự
							tham gia của hơn 200 bạn nữ CNTT. Hiện nay, Shecodes đã mở rộng
							các chương trình hoạt động tại cả thành phố Hà Nội và Hồ Chí Minh;
							thu hút hơn 6000 bạn trẻ quan tâm trên khắp cả nước.
						</AboutItemParagraph>
					</AboutColumn>
					<AboutColumn className='col-1-of-2'>
						<AboutImage
							src={githubRawAsserts + '2020/common/ava2020-full.png'}
							alt='Shecode-Logo'
						/>
					</AboutColumn>
				</AboutRow>
			</AboutUsBox>
			<AboutHackathonBox>
				<AboutRow>
					<AboutColumn className='col-1-of-2'>
						<AboutImage
							src={githubRawAsserts + '2018/hackathon/hackathon-team-2018.jpg'}
							alt='Hackathon-2018'
						/>
					</AboutColumn>
					<AboutColumn className='col-1-of-2'>
						<AboutItemHeader>VỀ HACKATHON</AboutItemHeader>
						<AboutItemParagraph>
							SheCodes Vietnam Hackathon là một cuộc thi giúp phái nữ nhận thức
							được tầm quan trọng của công nghệ thông tin trong việc giải quyết
							những vấn đề xã hội và sức mạnh của công nghệ trong việc tạo nên
							ảnh hưởng tích cực tới cộng đồng. Sau 3 năm tổ chức, SheCodes
							Hackathon đã thu hút hơn 6000 người quan tâm, hơn 300 đội thi và
							hơn 40 ý tưởng khởi nghiệp được ấp ủ.
						</AboutItemParagraph>
						<RegistrationButton href='https://docs.google.com/forms/d/e/1FAIpQLSfSLJ8l2dbgT1aM_IgFe-ja3DWZG0KKSOBRlWQslaMNkQKmAA/viewform'>
							ĐĂNG KÝ THAM GIA HACKATHON
						</RegistrationButton>
					</AboutColumn>
				</AboutRow>
			</AboutHackathonBox>
			<AboutUsBox>
				<AboutRow>
					<AboutItemHeader>SỨ MỆNH</AboutItemHeader>
					<AboutItemParagraph>
						Chúng tôi muốn thay đổi tư duy của mọi người về phái nữ trong Công
						nghệ thông tin và tạo ra một môi trường dám thử sức - dám thất bại
						để phái nữ có thể thoải mái sáng tạo, học hỏi về công nghệ. Chúng
						tôi hi vọng chính những người tham dự của SheCodes sẽ tạo nên một
						tương lai “lập trình như những người phụ nữ” cho nền công nghệ tại
						Việt Nam.
					</AboutItemParagraph>
				</AboutRow>
			</AboutUsBox>
		</AboutBox>
	);
};

export default About;
