import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { FlexBox, Box } from './common/Box';
import { ColorfulText, NormalText } from './common/Text';
import { Card } from './common/Card';
import { SponsorsList } from './Sponsors';

const githubRawAsserts =
	'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/';

const HackathonBox = styled.div`
	margin: auto;
	margin-top: 6rem;
	box-sizing: border-box;
	padding: 0;
`;

const HeaderBox = styled.div`
	width: 100%;
	height: 92vh;
	background-image: linear-gradient(
		to top,
		rgba(89, 35, 104, 0.65),
		rgba(89, 35, 104, 0.65)
	);
	background-position: center;
	background-size: cover;
	position: relative;

	@media (max-width: 957px) {
		background-image: linear-gradient(
				to right bottom,
				rgba(22, 22, 22, 0.8),
				rgba(22, 22, 22, 0.8)
			),
			url('https://vuhuycto.github.io/shecodesdemo/assets/Hackathon-image.png');
	}
`;

const VideoBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: -1;
	overflow: hidden;
	opacity: 1;
	@media (max-width: 957px) {
		display: none;
	}
`;

const VideoIntro = styled.video`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const HeaderHackathon = styled.h1`
	display: none;
	font-size: 7rem;
	color: #fbfeff;
	line-height: 10rem;

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
	}
	@media (max-width: 957px) {
		display: block;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		margin: 0;
		padding: 0;
	}
`;

const StatisticsRow = styled.div`
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

const StatisticsColumn = styled.div`
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

const PurposeParagraph = styled.p`
	&:not(:last-child) {
		margin-bottom: 3rem;
	}
	font-size: 1.6rem;
	margin: 0;
	padding: 0;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	color: #f0f0f0;
	box-sizing: border-box;
	text-align: justify;
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
`;

const EvaluationBox = styled.div`
	padding-top: 15rem;
	background-color: #000;
	padding-bottom: 15rem;
`;

const EvaluationIcon = styled.i`
	font-size: 5rem;
	text-align: center !important;
`;

const EvaluationParagraph = styled(PurposeParagraph)`
	text-align: center !important;
`;

const AgendaBox = styled.div`
	background-image: url('https://vuhuycto.github.io/shecodesdemo/assets/logodark.png');
	background-size: cover;
	background-position: top;
	padding-top: 15rem;
	padding-bottom: 10rem;
	position: relative;
`;

const AgendaHeader = styled.h2`
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
	margin: 0;
	padding: 0;
`;

const AgendaRow = styled(StatisticsRow)`
	margin-top: 0.5rem !important;
`;

const AgendaItemBox = styled.div`
	margin: 0;
	padding: 0;
	text-align: center !important;
`;

const AgendaItemDownBox = styled(AgendaItemBox)`
	margin-top: 6rem !important;
`;

const AgendaItemHeader = styled.h3`
	font-size: 2.4rem;
	font-weight: 700;
	text-transform: uppercase;
	color: #fbfeff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
`;

const AgendaTimelineBox = styled.div`
	padding-top: 4rem !important;
	box-sizing: border-box;
	@media only screen and (max-width: 56.25em) {
		padding-top: 3rem !important;
	}
	.row {
		&:not(:first-child) {
			margin-top: -6rem;

			@media only screen and (max-width: 56.25em) {
				margin-top: initial;
			}
		}

		.col-1-of-3 {
			text-align: right;
		}

		.col-2-of-3 {
			text-align: left;
		}

		@media only screen and (max-width: 56.25em) {
			.col-1-of-3,
			.col-2-of-3 {
				text-align: center;
			}

			.col-2-of-3 {
				margin-top: -4.5rem;
			}
		}
	}
`;

const AgendaItemRow = styled(StatisticsRow)``;

const HanoiAgendaFirstDayMap = [
	{
		start: '09:00',
		end: '10:15',
		content: ['Hackers check-in', 'Network cùng công ty'],
	},
	{
		start: '10:15',
		end: '11:00',
		content: ['Khai mạc'],
	},
	{
		start: '11:00',
		end: '11:30',
		content: ['Lập team'],
	},
	{
		start: '11:30',
		end: '12:00',
		content: ['Các đội bàn ý tưởng'],
	},
	{
		start: '12:00',
		end: '12h:50',
		content: ['Ăn trưa'],
	},
	{
		start: '12:50',
		end: '13:35',
		content: [
			'Workshop: Xây Website không cần code với Pingendo',
			'Workshop: Xây Website với HTML & CSS',
		],
	},
	{
		start: '13:45',
		end: '14:35',
		content: [
			'Workshop: Xây Mobile App không cần code với Thunkable',
			'Workshop: Xây Mobile App với React Native',
		],
	},
	{
		start: '14:40',
		end: '15:35',
		content: [
			'Workshop: Xây Chatbot với Natural Language Toolkit Platform',
			'Workshop: Giới thiệu về Data Analysis bằng ngôn ngữ R',
		],
	},
	{
		start: '15:30',
		end: '15:50',
		content: ['Tea Break!'],
	},
	{
		start: '15:50',
		end: '16:50',
		content: [
			'Workshop: Nhận diện khuôn mặt với OpenCV',
			'Workshop: Recommender System - Hệ thống gợi ý',
		],
	},
	{
		start: '16:55',
		end: '17:35',
		content: ['Tech talk: Hệ thống đám mây & Ứng dụng cho Startups'],
	},
	{
		start: '17:40',
		end: '18:35',
		content: ['Techtalk: Technical Strategy for AI Engineers'],
	},
	{
		start: '18:40',
		end: '19:20',
		content: ['Ăn tối'],
	},
	{
		start: '19:30',
		end: '20:30',
		content: [
			'Hot Take: Research Scientists vs Engineers',
			'Sau đại học: Đi làm nghiên cứu hay đi làm kỹ sư?',
		],
	},
	{
		start: '20:30',
		end: '21:30',
		content: ['Cloud Computing'],
	},
	{
		start: '21:30',
		end: '22:00',
		content: ['Snack!'],
	},
	{
		start: '22:00',
		end: '22:45',
		content: ['Đắp mặt nạ'],
	},
];

const HanoiAgendaSecondDayMap = [
	{
		start: '07:30',
		end: '08:00',
		content: ['Morning Yoga'],
	},
	{
		start: '08:00',
		end: '08:30',
		content: ['Ăn sáng'],
	},
	{
		start: '08:30',
		end: '09:15',
		content: [
			'Câu chuyện chuyển ngành:',
			'Học Marketing để đi làm Nghiên cứu Trí Tuệ Nhân tạo',
		],
	},
	{
		start: '09:15',
		end: '09:20',
		content: ['Giải lao'],
	},
	{
		start: '09:20',
		end: '10:15',
		content: [
			'Virtual Tech talk: Làm kỹ sư phần mềm ở Google cũng dễ :)',
			'(From a bio nerds to Software Engineer at Google)',
		],
	},
	{
		start: '10:15',
		end: '10:20',
		content: ['Giải lao'],
	},
	{
		start: '10:20',
		end: '11:20',
		content: ['Hoàn thiện dự án & chuẩn bị Powerpoint'],
	},
	{
		start: '11:20',
		end: '12:00',
		content: [
			'Nộp dự án qua Devpost & Github',
			'Nộp bản thuyết trình Powerpoint',
		],
	},
	{
		start: '12:00',
		end: '13:00',
		content: ['Ăn trưa'],
	},
	{
		start: '13:00',
		end: '14:00',
		content: ['Vòng 1: Triển lãm sản phẩm', 'Mentors đánh giá các đội'],
	},
	{
		start: '14:00',
		end: '14:45',
		content: ['Hot Take: AI In Medicine', 'Trí tuệ nhân tạo trong Y học'],
	},
	{
		start: '14:45',
		end: '15:00',
		content: ['Tea Break'],
	},
	{
		start: '15:00',
		end: '17:00',
		content: [
			'Vòng 2: Top 10 thuyết trình sản phẩm (5 phút thuyết trình và 3 phút Q&A mỗi đội)',
		],
	},
	{
		start: '17:00',
		end: '17:30',
		content: [
			'Workshop: I am remarkable, from Google’s Women Techmakers Scholar',
			'Ban Giám Khảo đánh giá các đội',
		],
	},
	{
		start: '17:35',
		end: '18:00',
		content: ['Công bố kết quả & Lễ bế mạc'],
	},
];

const HCMAgendaFirstDayMap = [
	{
		start: '09:00',
		end: '10:00',
		content: ['Check-in. Networking cùng công ty & ghép đội'],
	},
	{
		start: '10:00',
		end: '11:30',
		content: ['Bắt đầu lễ khai mạc', 'Hướng dẫn luật tham dự'],
	},
	{
		start: '11:30',
		end: '12:30',
		content: ['Hacking bắt đầu', 'Workshop: Hệ điều hành và máy ảo'],
	},
	{
		time: '12:30',
		content: ['Ăn trưa'],
	},
	{
		start: '13:00',
		end: '15:00',
		content: ['Workshop: HTML + CSS cơ bản và framework'],
	},
	{
		start: '15:30',
		end: '17:30',
		content: ['Workshop: ExpressJS – Xây dựng server với JavaScript'],
	},
	{
		start: '17:30',
		end: '19:00',
		content: ['Trao đổi ý tưởng và nhận xét. Ăn tối'],
	},
	{
		start: '19:30',
		end: '21:00',
		content: [
			'Workshop: Hello AWS - Python trên Cloud',
			'Python Workshop: Lập trình GUI và truy xuất dữ liệu cùng SQlite',
		],
	},
	{
		start: '21:00',
		end: '22:30',
		content: [
			'Workshop: Xây dựng chatbot cho ứng dụng của bạn',
			'Workshop: Tiếp cận và xây dựng model cơ bản với thư viện sklearn',
		],
	},
	{
		start: '22:30',
		end: '23:00',
		content: ['Snack + mini game'],
	},
	{
		time: '23:00',
		content: ['Đắp mặt nạ thư giãn'],
	},
];

const HCMAgendaSecondDayMap = [
	{
		start: '06:30',
		end: '07:00',
		content: ['Yoga cùng giáo viên khách mời BOUND YOGA'],
	},
	{
		time: '07:00',
		content: ['Ăn sáng'],
	},
	{
		start: '07:30',
		end: '08:30',
		content: ['Workshop: Web hosting và AWS'],
	},
	{
		start: '08:40',
		end: '09:40',
		content: ['Techtalk: Internet of Things'],
	},
	{
		start: '10:00',
		end: '11:00',
		content: ['Techtalk: Kiến tạo giá trị - Nền tảng của Pitching'],
	},
	{
		time: '12:30',
		content: ['Kết thúc hacking. Ăn trưa'],
	},
	{
		start: '13:00',
		end: '15:00',
		content: ['Techtalk: AI 101'],
	},
	{
		start: '16:00',
		end: '17:00',
		content: ['Triển lãm sản phẩm'],
	},
	{
		start: '17:00',
		end: '18:00',
		content: ['Top 5 thuyết trình về sản phẩm'],
	},
	{
		start: '18:00',
		end: '19:00',
		content: ['Công bố giải thưởng và bế mạc'],
	},
];

const generateAgendaComponentMap = (agendaMap) => {
	let componentsMap = [];
	for (let i = 0; i < agendaMap.length; i++) {
		const item = agendaMap[i];
		if (item.time != null) {
			componentsMap.push(
				<AgendaItemRow className='row' key={'item_' + i}>
					<StatisticsColumn className='col-1-of-3'>
						<time
							dateTime={item.time}
							style={{ fontSize: '2rem', margin: '0', textAlign: 'inherit' }}
						>
							{item.time}
						</time>
					</StatisticsColumn>
					<StatisticsColumn className='col-2-of-3'>
						{item.content.map((value, index) => (
							<p
								key={'content_' + index}
								style={{ fontSize: '2rem', margin: '0', textAlign: 'inherit' }}
							>
								{value}
							</p>
						))}
					</StatisticsColumn>
				</AgendaItemRow>
			);
		} else {
			componentsMap.push(
				<AgendaItemRow className='row' key={'item_' + i}>
					<StatisticsColumn className='col-1-of-3'>
						<time
							dateTime={item.start}
							style={{ fontSize: '2rem', margin: '0', textAlign: 'inherit' }}
						>
							{item.start} -{' '}
						</time>
						<time
							dateTime={item.end}
							style={{ fontSize: '2rem', margin: '0', textAlign: 'inherit' }}
						>
							{item.end}
						</time>
					</StatisticsColumn>
					<StatisticsColumn className='col-2-of-3'>
						{item.content.map((value, index) => (
							<p
								key={'content_' + index}
								style={{ fontSize: '2rem', margin: '0', textAlign: 'inherit' }}
							>
								{value}
							</p>
						))}
					</StatisticsColumn>
				</AgendaItemRow>
			);
		}
	}
	return componentsMap;
};

const GSBox = styled.article`
	background-color: #161616;
	padding-top: 10rem;
	padding-bottom: 10rem;
`;

const GSCardImageBox = styled.div`
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

const GSCardImage = styled.img`
	display: block;
	max-width: 100%;
	margin: 0;
	padding: 0;
`;

const GSTextBox = styled.div`
	padding-top: 4rem !important;
	@media only screen and (max-width: 56.25em) {
		padding-top: 3rem !important;
	}
`;

const GSText = styled.p`
	box-sizing: border-box;
	color: #f0f0f0;
	display: block;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 1.6rem;
	font-weight: 400;
	margin: 0;
	padding: 0;
	margin-top: 2rem;
	font-size: 1.6rem;
	text-align: center;
`;

const GSHeaderIntro = styled.h3`
	font-size: 2.4rem;
	color: #fbfeff;
	margin: 0;
	padding: 0;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
`;

const FAQsBox = styled.div`
	background-color: #000;
	padding-bottom: 5rem;
`;

const FAQsRow = styled(StatisticsRow)`
  padding-bottom: 4rem !important; }
  @media only screen and (max-width: 56.25em) {
    padding-bottom: 3rem !important;
  }
  padding-top: 10rem !important;
`;

const FAQsHeader = styled(AgendaHeader)`
  padding-bottom: 4rem !important; }
  @media only screen and (max-width: 56.25em) {
    padding-bottom: 3rem !important; 
  }
`;

const FAQsMap = [
	{
		question: '> Hackathon là gì?',
		ans: [
			'Hackathon là một cuộc thi trong đó người tham gia có thể xây dựng và phát triển phần mềm hoặc ứng dụng công nghệ trong một khoảng thời gian ngắn (thường 24h tới 72h, đôi khi kéo dài một tuần). Tại hackathon, người tham gia có cơ hội sử dụng công nghệ để giải quyết các vấn đề thực tiễn đặt ra theo chủ đề của sự kiện. Các dự án thường được “hack” trong một hackathon bao gồm: website, ứng dụng điện thoại, game, ứng dụng thực tế ảo (Virtual Reality), phần cứng (hardware), v.v. Nhìn chung, phạm vi dự án khá mở và thường không có giới hạn.',
		],
	},
	{
		question: '> SheCodes Hackathon là gì?',
		ans: [
			'SheCodes Hackathon là sự kiện thường niên của đội ngũ SheCodes Vietnam tại 2 thành phố Hà Nội, Hồ Chí Minh hứa hẹn đem đến sân chơi Công nghệ sôi nổi và chuyên nghiệp dành cho phái nữ.. Đây là cuộc thi phát triển phần mềm đầu tiên tại Việt Nam hướng đến đối tượng dự thi là nữ giới có độ tuổi từ 16 trở lên với hy vọng thu hẹp khoảng cách giới tính trong lĩnh vực Công nghệ thông tin và thay đổi nhận thức của các bạn trẻ về tầm quan trọng của nhóm ngành này.',
		],
	},
	{
		question: '> Vì sao mình nên tham dự SheCodes Hackathon 2020?',
		ans: [
			'Bước vào hành trình SheCodes Hackathon 2019, thí sinh và người tham dự sẽ có cơ hội:',
			[
				'Tham gia các buổi workshop và tech talk có 1-0-2 nhằm trang bị những kiến thức, kĩ năng chuyên môn cần thiết trong ngành IT.',
				'Thỏa sức sáng tạo, kề vai sát cánh cùng chị em đồng đội xây dựng và thực hiện những ý tưởng táo bạo, đột phá.',
				'Kết nối với đội ngũ mentors cực “cool” cùng ban giám khảo là những chuyên gia, lập trình viên kỳ cựu, các nhà tuyển dụng đầu ngành.',
				'Được hỗ trợ ăn ở, trải qua 2 NGÀY 1 ĐÊM trong bầu không khí cởi mở, tràn đầy nhiệt huyết và hừng hực khí thế của các đội chơi.',
			],
			'Đem về giải thưởng hấp dẫn và giấy chứng nhận từ tổ chức SheCodes Vietnam.',
		],
	},
	{
		question:
			'> Nếu mình không có bất kì kinh nghiệm lập trình nào thì có tham gia thi được không?',
		ans: [
			'Trong một team, không nhất thiết là tất cả các thành viên đều phải có khả năng lập trình. Các kỹ năng khác như design UX/UI, thuyết trình, làm việc nhóm, quản lý thời gian đóng vai trò không kém phần quan trọng trong việc tạo nên sản phẩm của nhóm. Hơn nữa, phần code chỉ chiếm 20% điểm số của toàn đội, và 80% còn lại được chấm dựa trên các tiêu chí: hình thức, sáng tạo, độ liên quan tới track, tính khả thi, kỹ năng thuyết trình.',
			'Ngoài ra, SheCodes Vietnam sẽ mở lớp dạy code hoàn toàn miễn phí trước Hackathon để trang bị cho bạn các kĩ năng lập trình cơ bản nhất. Từ đó, bạn hoàn toàn có thể tự mình xây dựng app điện thoại hay làm website đơn giản chỉ trong vòng 24h.',
			'Trong thời gian thi đấu, sẽ có một đội ngũ mentors nhiệt tình luôn sẵn sàng trả lời câu hỏi và giúp đỡ đội của bạn trong quá trình xây dựng sản phẩm. SheCodes Vietnam cũng tổ chức các workshop về lập trình đơn giản cho người mới bắt đầu tại sự kiện SheCodes Hackathon 2020.',
		],
	},
	{
		question: '> Ai có thể dự thi SheCodes Hackathon 2020?',
		ans: [
			'Tất cả các bạn nữ từ 16 tuổi trở lên đều có thể tham gia dự thi nha!',
		],
	},
	{
		question: '> Nam giới có thể tham dự SheCodes Hackathon 2020 được không?',
		ans: [
			'Nam giới có thể tới và tham gia các buổi tech talk và workshop có 1-0-2 với những chuyên gia hàng đầu trong lĩnh vực Công nghệ thông tin về nhiều chủ đề như HTML/CSS, ngôn ngữ lập trình Python và Javascript, hay Machine learning, Blockchain, và AI crashcourse. Tuy nhiên, nam giới không được tham gia dự thi hackathon.',
		],
	},
	{
		question:
			'> Đội chơi trong hackathon của mình có thể có tối đa bao nhiêu người?',
		ans: [
			'Một đội chơi trong SheCodes Hackathon có thể có tối đa 5 người và tối thiểu là 1 người.',
		],
	},
	{
		question: '> Nếu mình chưa có team/không tìm được team thì sao?',
		ans: ['Đừng lo! Ban tổ chức sẽ giúp bạn tìm teammates và ghép đội dự thi.'],
	},
	{
		question: '> Mình có mất phí khi tham dự SheCodes Hackathon 2020 không?',
		ans: [
			'Hoàn toàn KHÔNG! SheCodes Hackathon 2020 là một sự kiện hoàn toàn miễn phí. Người tham dự sẽ được cung cấp đồ ăn, snack, cà phê, chỗ ngủ, không gian và những điều kiện cần thiết để lập trình trong suốt thời gian diễn ra sự kiện. Tuy nhiên, ban tổ chức không hỗ trợ chi phí di chuyển từ nơi ở của bạn tới địa điểm thi.',
		],
	},
	{
		question: '> Mình nên mang gì khi đến dự thi SheCodes Hackathon 2020?',
		ans: [
			'Laptop, điện thoại, sạc, và một tinh thần ham học hỏi! Ngoài ra bạn có thể mang thêm chăn, gối, và những đồ dùng cá nhân khác.',
		],
	},
	{
		question: '> Thời gian và địa điểm tổ chức SheCodes Hackathon 2020?',
		ans: [
			'Sự kiện sẽ diễn ra trong hai ngày:',
			['Hà Nội: 25, 26/7/2020', 'Hồ Chí Minh: 18, 19/7/2020'],
			'Địa điểm: Sẽ được thông báo sau',
		],
	},
	{
		question:
			'> Nếu không ở Hà Nội hoặc Hồ Chí Minh thì có thể tham gia SheCodes Hackathon 2020 được không?',
		ans: [
			'Được! SheCodes Vietnam sẽ hỗ trợ bạn toàn bộ chi phí ăn ở trong thời gian thi. Tuy nhiên, ban tổ chức không hỗ trợ chi phí di chuyển từ nơi ở của bạn tới địa điểm thi.',
		],
	},
	{
		question: '> Hackathon 2020 có gì đặc biệt?',
		ans: [
			'Câu hỏi của bạn chưa được giải đáp ở trên? Đừng ngần ngại gửi cho ban tổ chức những thắc mắc của bạn qua email nhitran.shecodes@gmail.com (Hà Nội), tranbui.shecodes@gmail.com (Hồ Chí Minh) hoặc nhắn tin trực tiếp tới inbox của fanpage tại m.me/shecodesvietnam. Bọn mình sẽ cố gắng giải đáp những câu hỏi của bạn sớm nhất có thể!',
		],
	},
];

const FAQsItemBox = styled.div`
	background-color: #000;
	margin-bottom: 1rem;
	position: relative;
	overflow: hidden;
`;

const FAQsQuestion = styled.h4`
	font-size: 1.6rem;
	font-weight: 500;
	padding: 2rem;
	border: 0.15rem solid #3f3f3f;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	color: #f0f0f0;
	background-color: ${(props) => (props.ans ? '#3f3f3f' : '#000')};
	display: block;
	cursor: pointer;
	text-align: left;
	margin: 0;
	&:hover {
		background-color: #3f3f3f;
	}
`;

const FAQsAnswer = styled.div`
	max-height: 100vh;
	font-size: 1.6rem;
	font-weight: 500;
	padding: 2rem;
	border: 0.15rem solid #3f3f3f;
	margin: 0;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	color: #f0f0f0;
	text-align: justify;
	border-top: 0;
`;

const FAQsItem = (props) => {
	const [show, setShow] = useState(false);
	return (
		<FAQsItemBox>
			<FAQsQuestion
				ans={show}
				onClick={() => {
					setShow(!show);
				}}
				show={show}
			>
				{props.question}
			</FAQsQuestion>
			<FAQsAnswer hidden={!show}>{props.ansComponents}</FAQsAnswer>
		</FAQsItemBox>
	);
};

const generateFAQsComponentMap = (FAQsMap) => {
	let FAQsComponentMap = [];
	for (let i = 0; i < FAQsMap.length; i++) {
		const item = FAQsMap[i];
		const ans_array = item.ans;
		let ansComponents = [];
		for (let j = 0; j < ans_array.length; j++) {
			const ans = ans_array[j];
			if (Array.isArray(ans)) {
				ansComponents.push(
					<ul key={'ul_faqs_' + j}>
						{ans.map((value, index) => (
							<li
								key={'ans_li_' + index}
								style={{
									fontSize: '1.6rem',
									lineHeight: '1.7',
									margin: '0',
									padding: '0',
								}}
							>
								{value}
							</li>
						))}
					</ul>
				);
			} else {
				ansComponents.push(
					<p
						style={{
							fontSize: '1.6rem',
							lineHeight: '1.7',
							margin: '0',
							padding: '0',
						}}
						key={'p_faqs_' + j}
					>
						{ans}
					</p>
				);
			}
		}
		FAQsComponentMap.push(
			<FAQsItem
				question={item.question}
				ansComponents={ansComponents}
				key={'faqs_' + i}
			/>
		);
	}
	return FAQsComponentMap;
};

const SwitchAgendaButtonGroup = styled(ButtonGroup)`
	height: 100%;
	max-width: 100%;
	margin: 0 auto;
	display: flex !important;
	justify-content: center;
	@media only screen and (max-width: 56.25em) {
		margin-bottom: 6rem;
		flex-direction: column-reverse !important;
	}
`;

const SwitchAgendaButton = styled(ToggleButton)`
	font-size: 3rem;
	text-transform: uppercase;
	font-weight: 700;
	width: 30%;
	color: #fbfeff !important;
	background-color: #161616 !important;
	display: inline;
	letter-spacing: 0.2rem;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	margin: 0;
	padding: 0 2rem;
	box-sizing: border-box;
	opacity: ${(props) => (props.checked ? 0.7 : 0.3)};
	border-top-right-radius: ${(props) =>
		props.value === '1' ? '10000rem' : '0'} !important;
	border-bottom-right-radius: ${(props) =>
		props.value === '1' ? '10000rem' : '0'} !important;
	border-top-left-radius: ${(props) =>
		props.value === '2' ? '10000rem' : '0'} !important;
	border-bottom-left-radius: ${(props) =>
		props.value === '2' ? '10000rem' : '0'} !important;
	position: relative !important;
	left: ${(props) => (props.value === '1' ? '50%' : 'auto')};
	right: ${(props) => (props.value === '2' ? '50%' : 'auto')};
	@media only screen and (max-width: 56.25em) {
		left: auto;
		right: auto;
		border-radius: 0 !important;
		font-size: 2rem;
		width: 100%;
	}
`;

const statistics = [
	{
		number: '407',
		description: 'Người đăng ký',
	},
	{
		number: '299',
		description: 'Người tham gia',
	},
	{
		number: '16',
		description: 'Công ty',
	},
	{
		number: '41',
		description: 'Cố vấn/hướng dẫn viên, khách mời',
	},
];
const purposes = [
	{
		name: 'TRANG BỊ KIẾN THỨC',
		icon: 'icon-basic-notebook-pen',
		description:
			'Cung cấp kiến thức cơ bản đồng thời định hướng nghề nghiệp về những ngành nghề liên quan đến công nghệ thông tin, giúp người tham gia bước ra khỏi vùng an toàn của mình và khám phá tiềm năng của bản thân.',
	},
	{
		name: 'TẠO SỰ CÔNG BẰNG',
		icon: 'icon-basic-female',
		description:
			'Mang đến cơ hội để phái nữ, không kể có kinh nghiệm lập trình hay chưa, đều được học hỏi và phát triển qua đó tạo ra một xã hội công bằng giữa phái nam và phái nữ.',
	},
	{
		name: 'NHẬN THỨC SỨC MẠNH CÔNG NGHỆ',
		icon: 'icon-basic-server2',
		description:
			'Giúp phái nữ nhận thức được tầm quan trọng của công nghệ thông tin trong việc giải quyết những vấn đề xã hội và tạo nên ảnh hưởng tích cực tới cộng đồng.',
	},
];
const criteria = [
	{
		name: 'Tính sáng tạo',
		icon: 'icon-basic-lightbulb',
	},
	{
		name: 'Tính hữu dụng & Thực tế',
		icon: 'icon-basic-accelerator',
	},
	{
		name: 'Giá trị kinh doanh và Chiến lược Marketing',
		icon: 'icon-basic-globe',
	},
	{
		name: 'Tính bền vững',
		icon: 'icon-basic-hammer',
	},
	{
		name: 'Tính công nghệ & Kỹ thuật',
		icon: 'icon-basic-laptop',
	},
	{
		name: 'Demo',
		icon: 'icon-basic-display',
	},
	{
		name: 'Dùng API nhà tài trợ',
		icon: 'icon-basic-cloud',
	},
];
const speakers_hn = [
	{
		name: 'Mr. Minh Duong',
		title: 'CBO OSAM',
		image: githubRawAsserts + 'speaker/hn/minh_duong.jpg',
	},
	{
		name: 'Mr. Tuan Nguyen',
		title:
			'Founder AI For Everyone - Research Scientist Vingroup BigData Institute',
		image: githubRawAsserts + 'speaker/hn/tuan_nguyen.jpg',
	},
	{
		name: 'Ms. Trang Tran',
		title: 'Software Engineer, Site Reliability Google',
		image: githubRawAsserts + 'speaker/hn/trang_tran.png',
	},
	{
		name: 'Ms. Nguyen Quynh Mai',
		title: 'AI Research Engineer',
		image: githubRawAsserts + 'speaker/hn/nguyen_quynh_mai.jpeg',
	},
	{
		name: 'Mr. Binh Nguyen',
		title:
			'Google Developer Expert in Machine Learning - NLP Engineer at VinBigdata',
		image: githubRawAsserts + 'speaker/hn/binh_nguyen.png',
	},
	{
		name: 'Ms Quynh Le',
		title: 'VinAI Resident',
		image: githubRawAsserts + 'speaker/hn/quynh_le.jpg',
	},
];
const speakers_hcm = [
	{
		name: 'Madam Lien',
		title: 'CEO LIAN, Investor Shark Tank Vietnam',
		image: 'https://vuhuycto.github.io/shecodesdemo/assets/madam-lien.jpg',
	},
	{
		name: 'Mr. Tran Vu Anh',
		title: 'CTO Waves8',
		image: githubRawAsserts + 'speaker/hcm/tran_vu_anh.jpg',
	},
	{
		name: 'Mr. Ly Quang Huy',
		title: 'CTO Iot Gaming Vietnam',
		image: 'https://vuhuycto.github.io/shecodesdemo/assets/ly-quang-huy.jpg',
	},
	{
		name: 'Ms. Elisha Tan',
		title: 'PM Facebook APAC - Founder TechLadies',
		image: 'https://vuhuycto.github.io/shecodesdemo/assets/elisha-tan.jpg',
	},
	{
		name: 'Mr. Nguyen Sieu Dang',
		title:
			'Training director Master in IOT program FPT International Education',
		image: 'https://vuhuycto.github.io/shecodesdemo/assets/nguye-sieu-dang.jpg',
	},
	{
		name: 'Ms. Nguyen Thuy An',
		title: 'Teacher at Facebook Developer Circles Innovation Challenge',
		image: 'https://vuhuycto.github.io/shecodesdemo/assets/nguye-thuy-an.jpg',
	},
	{
		name: 'Mr. Nguyen Xuan Hiep',
		title: 'Data Scientist - Logivan',
		image: githubRawAsserts + 'speaker/hcm/nguyen_xuan_hiep.png',
	},
	{
		name: 'Mr. Anjul S',
		title: 'Thạc sĩ Khoa học Máy tính và Kỹ thuật của Viện Khoa học Ấn Độ',
		image: githubRawAsserts + 'speaker/hcm/anju.jpg',
	},
	{
		name: 'Mr. Vu Thai Bao',
		title: 'Trung Tâm Giám Sát An Toàn Thông Tin HPT',
		image: githubRawAsserts + 'speaker/hcm/vu_thai_bao.png',
	},
	{
		name: 'Mr. Dang Thanh Qui',
		title: 'Trưởng Bộ môn Lập trình - VTC Academy TP.HCM',
		image: githubRawAsserts + 'speaker/hcm/dang_thanh_qui.png',
	},
	{
		name: 'Mr. Ho Nguyen Hoang Phuong',
		title: 'Giảng viên ngành Lập trình Game - VTC Academy TP.HCM',
		image: githubRawAsserts + 'speaker/hcm/ho_nguyen_hoang_phuong.png',
	},
	{
		name: 'Mr. Vu Tuan Anh',
		title:
			'Thạc sỹ Vũ Tuấn Anh - Chuyên Gia Khởi Nghiệp – Hướng Nghiệp – Nghề Nghiệp',
		image: githubRawAsserts + 'speaker/hcm/vu_tuan_anh.png',
	},
	{
		name: 'Mr. Pham Minh Duc',
		title: 'Giám đốc Marketing & Truyền thông – VTC Academy',
		image: githubRawAsserts + 'speaker/hcm/pham_minh_duc.png',
	},
];

const Hackathon = (props) => {
	const [agenda, setAgenda] = useState('2');
	const agendaRadio = [
		{ name: 'Hồ Chí Minh', value: '1' },
		{ name: 'Hà Nội', value: '2' },
	];
	return (
		<HackathonBox>
			<HeaderBox>
				<VideoBox>
					<VideoIntro autoPlay muted loop>
						<source
							src='https://vuhuycto.github.io/shecodesdemo/assets/hackathon2020.mp4'
							type='video/mp4'
						/>
					</VideoIntro>
				</VideoBox>
				<HeaderHackathon>SheCodes Hackathon 2020</HeaderHackathon>
			</HeaderBox>
			<Box as='article' backgroundColor='#000' padding='15rem 0 15rem 0'>
				<ColorfulText
					as='h2'
					textAlign='center'
					fontSize='4rem'
					fontWeight='700'
					letterSpacing='0.2rem'
					lineHeight='1.7'
					width='90%'
				>
					ĐÁNH THỨC TIỀM NĂNG CÔNG NGHỆ
				</ColorfulText>
				<FlexBox
					margin='8rem auto 0 auto'
					smallMargin='6rem auto 0 auto'
					maxWidth
					addition='justify-content: center;'
					smallDirection='column'
				>
					{statistics.map((value, index) => (
						<FlexBox
							width={`${100 / statistics.length}%`}
							key={'statistics_hompage_' + index}
							margin='0 2%'
							smallDirection='column'
							direction='column'
							addition='justify-content: center;'
							smallWidth='100%'
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
			<Box
				padding='15rem 0 10rem 0'
				addition="
          background-image: 
            linear-gradient(to right, rgba(22, 22, 22, 0.8), rgba(0, 0, 0, 0.8)), 
            url('https://vuhuycto.github.io/shecodesdemo/assets/hackathon-mixed.png');
          background-size: cover;
          background-position: top;
        "
			>
				<FlexBox
					maxWidth
					margin='0 auto 8rem auto'
					smallMargin='0 auto 6rem auto'
				>
					{purposes.map((value, index) => (
						<Card
							margin='0 1%'
							direction='column'
							padding='2rem'
							smallMargin='0 auto 6rem auto'
							width={`${100 / purposes.length}%`}
							smallWidth={`${80}%`}
							key={'purposes_' + index}
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
						</Card>
					))}
				</FlexBox>
				<RegistrationButton
					href='https://docs.google.com/forms/d/e/1FAIpQLSfSLJ8l2dbgT1aM_IgFe-ja3DWZG0KKSOBRlWQslaMNkQKmAA/viewform'
					target='_blank'
				>
					Đăng ký tham gia
				</RegistrationButton>
			</Box>
			<EvaluationBox>
				<ColorfulText
					as='h2'
					textAlign='center'
					fontSize='4rem'
					fontWeight='700'
					letterSpacing='0.2rem'
					lineHeight='1.7'
					width='90%'
				>
					TIÊU CHÍ CHẤM ĐIỂM
				</ColorfulText>
				<FlexBox
					maxWidth
					margin='8rem auto -4rem auto'
					smallMargin='6rem auto -4rem auto'
					wrap='wrap'
				>
					{criteria.map((value, index) => (
						<Box
							key={'criteria_' + index}
							width={`${100 / 4}%`}
							padding='0 1%'
							margin='0 0 4rem 0'
							smallWidth='100%'
						>
							<EvaluationIcon className={value.icon} />
							<EvaluationParagraph>{value.name}</EvaluationParagraph>
						</Box>
					))}
				</FlexBox>
			</EvaluationBox>
			<AgendaBox>
				<StatisticsRow>
					<AgendaHeader>NỘI DUNG CHƯƠNG TRÌNH</AgendaHeader>
				</StatisticsRow>
				<AgendaRow>
					<StatisticsRow>
						<SwitchAgendaButtonGroup toggle>
							{agendaRadio.map((radio, idx) => (
								<SwitchAgendaButton
									key={idx}
									type='radio'
									variant='secondary'
									name='radio'
									value={radio.value}
									checked={agenda === radio.value}
									onChange={(e) => setAgenda(e.currentTarget.value)}
								>
									{radio.name}
								</SwitchAgendaButton>
							))}
						</SwitchAgendaButtonGroup>
					</StatisticsRow>
					<StatisticsColumn
						hidden={agenda !== '2'}
						style={{ float: 'none', margin: 0 }}
					>
						<AgendaItemBox>
							<AgendaItemHeader>
								{'>'} 25 THÁNG 7 NĂM 2020 (THỨ BẢY)
							</AgendaItemHeader>
							<AgendaTimelineBox>
								{generateAgendaComponentMap(HanoiAgendaFirstDayMap)}
							</AgendaTimelineBox>
						</AgendaItemBox>
						<AgendaItemDownBox>
							<AgendaItemHeader>
								{'>'} 26 THÁNG 7 NĂM 2020 (CHỦ NHẬT)
							</AgendaItemHeader>
							<AgendaTimelineBox>
								{generateAgendaComponentMap(HanoiAgendaSecondDayMap)}
							</AgendaTimelineBox>
						</AgendaItemDownBox>
					</StatisticsColumn>
					<StatisticsColumn
						hidden={agenda !== '1'}
						style={{ float: 'none', margin: 0 }}
					>
						<AgendaItemBox>
							<AgendaItemHeader>
								{'>'} 18 THÁNG 7 NĂM 2020 (THỨ BẢY)
							</AgendaItemHeader>
							<AgendaTimelineBox>
								{generateAgendaComponentMap(HCMAgendaFirstDayMap)}
							</AgendaTimelineBox>
						</AgendaItemBox>
						<AgendaItemDownBox>
							<AgendaItemHeader>
								{'>'} 19 THÁNG 7 NĂM 2020 (CHỦ NHẬT)
							</AgendaItemHeader>
							<AgendaTimelineBox>
								{generateAgendaComponentMap(HCMAgendaSecondDayMap)}
							</AgendaTimelineBox>
						</AgendaItemDownBox>
					</StatisticsColumn>
				</AgendaRow>
			</AgendaBox>
			<GSBox>
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
					DANH SÁCH DIỄN GIẢ HÀ NỘI
				</NormalText>
				<FlexBox
					maxWidth
					wrap='wrap'
					margin='8rem auto 0'
					smallMargin='6rem auto 0'
					addition='align-content: space-around;'
				>
					{speakers_hn.map((value, index) => (
						<Box
							width={`${100 / 3}%`}
							padding='2.5%'
							smallWidth='85%'
							smallMargin='0 auto'
							key={'speaker_' + index}
						>
							<Card direction='column' padding='2rem' height='100%'>
								<GSCardImageBox>
									<GSCardImage src={value.image} alt={value.name} />
								</GSCardImageBox>
								<GSTextBox>
									<GSHeaderIntro>{value.name}</GSHeaderIntro>
									<GSText>{value.title}</GSText>
								</GSTextBox>
							</Card>
						</Box>
					))}
				</FlexBox>
			</GSBox>
			<GSBox>
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
					DANH SÁCH DIỄN GIẢ HỒ CHÍ MINH
				</NormalText>
				<FlexBox
					maxWidth
					wrap='wrap'
					margin='8rem auto 0'
					smallMargin='6rem auto 0'
					addition='align-content: space-around;'
				>
					{speakers_hcm.map((value, index) => (
						<Box
							width={`${100 / 3}%`}
							padding='2.5%'
							smallWidth='85%'
							smallMargin='0 auto'
							key={'speaker_' + index}
						>
							<Card direction='column' padding='2rem' height='100%'>
								<GSCardImageBox>
									<GSCardImage src={value.image} alt={value.name} />
								</GSCardImageBox>
								<GSTextBox>
									<GSHeaderIntro>{value.name}</GSHeaderIntro>
									<GSText>{value.title}</GSText>
								</GSTextBox>
							</Card>
						</Box>
					))}
				</FlexBox>
			</GSBox>
			<SponsorsList />
			<article>
				<img
					src='https://vuhuycto.github.io/shecodesdemo/assets/B%C3%A0i%20bung.gif'
					alt='inspiration'
					style={{ display: 'block', width: '100%' }}
				/>
			</article>
			<FAQsBox>
				<FAQsRow>
					<FAQsHeader>FAQS DÀNH CHO HACKATHON</FAQsHeader>
					{generateFAQsComponentMap(FAQsMap)}
				</FAQsRow>
			</FAQsBox>
		</HackathonBox>
	);
};

export default Hackathon;
