import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Card } from './common/Card';
import { FlexBox, Box } from './common/Box';
import { ColorfulText, NormalText, AnimationLink } from './common/Text';

const timer = () => {
	const expired = new Date(2020, 6, 13, 0, 0, 0, 0);
	const difference = expired - Date.now();
	console.log(expired);
	let timeLeft = '';
	if (difference > 0) {
		timeLeft += Math.floor(difference / (1000 * 60 * 60 * 24)) + 'd : ';
		timeLeft += Math.floor((difference / (1000 * 60 * 60)) % 24) + 'h : ';
		timeLeft += Math.floor((difference / 1000 / 60) % 60) + 'm : ';
		timeLeft += Math.floor((difference / 1000) % 60) + 's ';
	} else {
		timeLeft = 'Đơn đăng ký đợt 2 đã đóng !';
	}
	return timeLeft;
};

const RegistrationBox = styled.div`
	position: absolute;
	top: 70%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 0;
	padding: 0;
	@media only screen and (max-width: 56.25em) {
		top: 75%;
	}
`;

// TODO(vnvo2409): Add animation for button
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
	color: #3f3f3f;
	background-color: #fbfeff;
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
		color: #3f3f3f;
	}
`;

const about =
	'SheCodes Vietnam là một tổ chức phi lợi nhuận, nhằm khuyến khích phái nữ tham gia vào lĩnh vực Công nghệ thông tin, qua đó dần dần xóa bỏ khoảng cách giới tính trong lĩnh vực này. Năm 2018, Shecodes Vietnam được triển khai lần đầu tiên tại TP Hà Nội, Việt Nam với sự kiện tiên phong mang tên Shecodes Hackathon cùng sự tham gia của hơn 200 bạn nữ CNTT. Hiện nay, Shecodes đã mở rộng các chương trình hoạt động tại cả thành phố Hà Nội và Hồ Chí Minh, thu hút hơn 6000 bạn trẻ quan tâm trên khắp cả nước.';
const features = [
	{
		name: 'TECH MARATHON',
		description:
			'Chuỗi các lớp học "crash course" trong vòng 3 ngày dành cho những người chưa có kinh nghiệp lập trình, tập trung vào hai mảng: Kỹ năng lập trình (Technical skills) & Định hướng nghề nghiệp (Career Exploration). Sau Tech Marathon HTML&CSS 04/2020, 90% học viên có phản hồi tích cực và hoàn toàn có thể tự xây được một website cho riêng mình.',
		link: '/tech-marathon',
		icon: 'icon-basic-laptop',
	},
	{
		name: 'HACKATHON',
		description:
			'Cuộc thi lập trình dành riêng cho phái nữ đầu tiên tại Việt Nam dành cho cả coder và non-coder, bao gồm không gian hack truyền thống cũng như hội thảo & thảo luận với các diễn giả. Sau 3 năm tổ chức, SheCodes Hackathon đã thu hút hơn 6000 người quan tâm, hơn 300 đội thi và hơn 40 ý tưởng khởi nghiệp được ấp ủ.',
		link: '/hackathon',
		icon: 'icon-basic-female',
	},
	{
		name: 'IT FAIR',
		description:
			'Năm 2020, SheCodes Vietnam cùng VOCF đồng tổ chức chương trình Tech Online Career Fair 2020 nhằm hỗ trợ trang bị kỹ năng nghề nghiệp và tìm kiếm cơ hội việc làm trong ngành IT cho các bạn sinh viên trong mùa dịch COVID-19. Tham gia Tech Fair, người tham gia sẽ có cơ hội kết nối với những người đi trước, từ đó có thể học hỏi và phát triển bản thân trong sự nghiệp. Với 02 webinar hướng về support các bạn nữ get jobs thành công với chủ đề  “Coding Oversea - Từ Việt Nam vươn ra Thế giới” và webinar “Women Leaders In Tech" Shecodes và các diễn giả đã truyền cảm hứng, mang đến những kiến thức và trải nghiệm vô cùng bổ ích cho hơn 400 bạn trẻ đăng ký tham dự.',
		icon: 'icon-basic-share',
	},
	{
		name: 'TECH TALK',
		description:
			'Tech Talk là các talkshow dành cho các bạn trẻ có niềm yêu thích về IT, nơi các bạn có thể chia sẻ về các chủ đề mang tính thời sự trong ngành, qua đó có cơ hội được đặt câu hỏi cũng như networking với chuyên gia. Những chương trình tech talk của SheCodes như: “Breaking into Product Management”, “Phụ nữ thời đại 4.0: Thách thức hay cơ hội”, “Girls in data science” luôn thu hút số lượng lớn người tham dự trực tiếp.',
		icon: 'icon-basic-question',
	},
];
const quotes = [
	{
		image:
			'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/staffs/HN/Director_Mai_Phuong_Thuy_Tien.jpg',
		quote:
			'Khi các bên đối tác hỏi SheCodes rằng liệu có đủ phái nữ thích công nghệ để mà thực hiện chương trình không thì câu trả lời sẽ luôn là có. Luôn có một nguồn nhân lực nữ đam mê tự học về IT, say sưa với từng dòng code, nhưng đơn giản là họ chưa tìm thấy đất dụng võ cho mình. SheCodes sẽ tạo ra một network để nữ giới phá bỏ các rào cản cá nhân và xã hội để can trường dấn thân vào lĩnh vực công nghệ này.',
		footer: 'Mai Phương Thủy Tiên (Director of SheCodes Vietnam)',
	},
	{
		image:
			'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/staffs/HN/PM_Tran_Tue_Nhi.jpg',
		quote:
			'Nhiều người hỏi tại sao một cô gái như mình lại học Công nghệ?  Rất dễ hiểu, vì mình muốn là người giải quyết bài toán, xây dựng sản phẩm và phát triển nó. Đó là cuộc sống của những người học công nghệ và mình muốn trở thành một trong số đó. Còn bạn thì sao?',
		footer: 'Trần Tuệ Nhi (Head of Hackathon) - Hà Nội',
	},
	{
		image:
			'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/staffs/HN/PM_Nguyen_Vu_Ngan_Ha.jpg',
		quote:
			'Chỉ cần có định hướng và những cơ hội phù hợp, phái nữ có thể tiến xa hơn bất kì ai. Vì vậy, tôi tin Tech Marathon là một chương trình có thể đem đến cơ hội và sự định hướng đó cho những bạn nữ - nhất là những người đang phân vân giữa những ngã rẽ nghề nghiệp, giúp họ tự tin hơn để theo đuổi ngành công nghệ thông tin.',
		footer: 'Nguyễn Vũ Ngân Hà (Head of Tech Marathon) - Hà Nội',
	},
];
const statistics = [
	{
		number: '20+',
		description: 'Sự kiện',
	},
	{
		number: '2000+',
		description: 'Người tham gia sự kiện',
	},
	{
		number: '45+',
		description: 'Diễn giả và các đối tác công ty công nghệ hàng đầu',
	},
	{
		number: '6000+',
		description:
			'Người theo dõi các hoạt động, chương trình của Shecodes Việt Nam',
	},
];

const HomePage = (props) => {
	const [time, setTime] = useState(timer());
	useEffect(() => {
		let countdown = setTimeout(() => {
			setTime(timer());
		}, 1000);
		return () => {
			clearTimeout(countdown);
		};
	});
	return (
		<Box margin='6rem auto auto auto' padding='0'>
			<Box
				width='100%'
				height='calc(100vh - 6rem)'
				addition="
          background-image: linear-gradient(
            to right bottom,
            rgba(22, 22, 22, 0.75),
            rgba(22, 22, 22, 0.75)
          ), url('https://vuhuycto.github.io/shecodesdemo/assets/hackathon-team-2018.jpg');
          background-position: center;
          background-size: cover;
          position: relative;
        "
			>
				<Box
					width='100%'
					addition='
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            @media only screen and (max-width: 75em) {
              top: 40%;
            }
          '
				>
					<NormalText
						fontSize='7rem'
						lineHeight='10rem'
						fontWeight='700'
						textAlign='center'
						display='block'
						padding='0 1%'
						addition="
              font-family: 'Courier New', Courier, monospace !important;
              @media only screen and (max-width: 75em) {
                font-size: 6rem; 
              }
              @media only screen and (max-width: 56.25em) {
                line-height: 7rem;
                margin-bottom: 1rem; 
              }
              @media only screen and (max-width: 37.5em) {
                font-size: 5rem;
                line-height: 6rem; 
              }
              @media only screen and (max-width: 25em) {
                font-size: 4rem;
                line-height: 6rem; 
              }"
					>
						SheCodes Hackathon 2020
					</NormalText>
					<NormalText
						display='block'
						textAlign='center'
						fontSize='7rem'
						lineHeight='10rem'
						addition="
              font-family: 'Courier New', Courier, monospace !important;
              white-space: nowrap;
              @media only screen and (max-width: 75em) {
                font-size: 5rem;
              }
              @media only screen and (max-width: 56.25em) {
                font-size: 4rem;
              }
              @media only screen and (max-width: 37.5em) {
                font-size: 2rem;
              }
              @media only screen and (max-width: 25em) {
                font-size: 1.5rem; 
              }
            "
					>
						{time}
					</NormalText>
				</Box>
				<RegistrationBox>
					<RegistrationButton
						href='https://docs.google.com/forms/d/e/1FAIpQLSfSLJ8l2dbgT1aM_IgFe-ja3DWZG0KKSOBRlWQslaMNkQKmAA/viewform'
						target='_blank'
					>
						Đăng ký tham gia
					</RegistrationButton>
				</RegistrationBox>
			</Box>
			<Box
				as='article'
				margin='0'
				padding='10rem 0 25rem 0'
				backgroundColor='#000'
			>
				<ColorfulText
					as='h2'
					display='block'
					margin='0 auto 4rem auto'
					smallMargin='0 auto 4rem auto'
					textAlign='center'
					fontSize='4rem'
					fontWeight='700'
					letterSpacing='0.2rem'
					lineHeight='1.7'
				>
					GIỚI THIỆU
				</ColorfulText>
				<NormalText
					as='p'
					display='block'
					margin='0 auto'
					width='90%'
					maxWidth
					textAlign='justify'
					fontSize='2rem'
					lineHeight='1.7'
					padding='0 1%'
				>
					{about}
				</NormalText>
			</Box>
			<Box
				as='article'
				margin='-10rem 0 0 0'
				backgroundColor='#161616'
				padding='0 0 10rem 0'
				addition='transform: skewY(-6deg);
        > * {
          transform: skewY(6deg);
        }'
				smallPadding='0 0 4rem 0'
			>
				<FlexBox margin='auto' maxWidth>
					{quotes.map((value, index) => (
						<Card
							key={'quote_homepage_' + index}
							width={`${100 / quotes.length}%`}
							margin='0 1.5%'
							padding='2rem'
							smallDirection='column'
							smallWidth={`${80}%`}
							smallMargin='0 auto 6rem auto'
							direction='column'
							wrap='wrap'
							addition='justify-content: flex-start !important;'
						>
							<Box
								as='img'
								width='20rem'
								height='20rem'
								margin='0 auto'
								src={value.image}
								alt={value.footer}
								addition='
                    border-radius: 1000000000px;
                  '
							/>
							<NormalText
								as='p'
								display='block'
								fontSize='1.6rem'
								margin='2rem 0 0 0'
								lineHeight='1.7'
								textAlign='justify'
							>
								{value.quote}
							</NormalText>
							<NormalText
								as='span'
								display='block'
								fontSize='1.6rem'
								margin='1rem 0 0 0'
								lineHeight='1.7'
								textAlign='left'
								addition='font-style: italic;'
							>
								- {value.footer}
							</NormalText>
						</Card>
					))}
				</FlexBox>
			</Box>
			<Box
				as='article'
				backgroundColor='#000'
				padding='30rem 0 20rem 0'
				margin='-10rem 0 0 0'
				smallPadding='30rem 0 20rem 0'
			>
				<ColorfulText
					as='h2'
					textAlign='center'
					fontSize='4rem'
					fontWeight='700'
					letterSpacing='0.2rem'
					lineHeight='1.7'
					width='90%'
				>
					ĐIỂM NỔI BẬT
				</ColorfulText>
				<FlexBox wrap='wrap' maxWidth margin='0 auto'>
					{features.map((value, index) => {
						return (
							<Box
								key={'features_' + index}
								width='50%'
								padding='0 2%'
								maxWidth
								margin='8rem auto 0 auto'
								smallWidth='90%'
							>
								<NormalText
									as='div'
									margin='0 0 1.5rem 0'
									display='block'
									textAlign='left'
									fontSize='2.4rem'
									fontWeight='700'
									lineHeight='1.7'
								>
									<NormalText
										className={value.icon}
										as='i'
										margin='0 1rem 0 0'
										fontSize='2.4rem'
										fontWeight='700'
										lineHeight='1.7'
									/>
									{value.name}
								</NormalText>
								<NormalText
									as='p'
									display='block'
									textAlign='justify'
									fontSize='1.6rem'
									lineHeight='1.7'
								>
									{value.description}
								</NormalText>
								{value.link ? (
									<AnimationLink
										$colorful
										as={Link}
										to={value.link}
										lineHeight='1.7'
										fontSize='1.6rem'
										margin='3rem 0 0 0'
										addition='float:left;'
									>
										Đọc thêm
									</AnimationLink>
								) : null}
							</Box>
						);
					})}
				</FlexBox>
			</Box>
			<Box
				as='article'
				backgroundColor='#000'
				padding='15rem 0 15rem 0'
				addition="
          background-image: linear-gradient(to right bottom, rgba(22, 22, 22, 0.75), rgba(22, 22, 22, 0.75)), url('https://vuhuycto.github.io/shecodesdemo/assets/homepage-secondary.png');
          background-position: center;
          background-size: cover;
        "
			>
				<NormalText
					s='h2'
					display='block'
					margin='0 auto'
					padding='0'
					textAlign='center'
					fontSize='4rem'
					fontWeight='700'
					letterSpacing='0.2rem'
					lineHeight='1.7'
					width='90%'
				>
					NHỮNG CON SỐ QUA TỪNG NĂM
				</NormalText>
				<FlexBox
					margin='8rem auto 0 auto'
					smallMargin='6rem auto 0 auto'
					maxWidth
				>
					{statistics.map((value, index) => (
						<FlexBox
							key={'statistics_hompage_' + index}
							margin='0 0.5%'
							smallDirection='column'
							direction='column'
						>
							<NormalText
								as='p'
								display='block'
								margin='0 auto'
								padding='0'
								textAlign='center'
								fontSize='8rem'
								fontWeight='700'
								letterSpacing='0.2rem'
								lineHeight='1.7'
							>
								{value.number}
							</NormalText>
							<NormalText
								as='p'
								display='block'
								margin='0 auto'
								padding='0'
								textAlign='center'
								fontSize='2rem'
								lineHeight='1.7'
							>
								{value.description}
							</NormalText>
						</FlexBox>
					))}
				</FlexBox>
			</Box>
		</Box>
	);
};

export default HomePage;
