import React, { useState } from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const githubRawAsserts =
	'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/';

const EventBox = styled.div`
	margin: auto;
	margin-top: 6rem;
	box-sizing: border-box;
	padding: 0;
`;

const YearBox = styled.div`
	display: flex;
	padding: 0;
	margin: 0;
	line-height: 1.75;
	font-size: 15px;
	background-color: #000;
	height: calc(100vh - 6rem);
	flex-direction: row-reverse;
	@media only screen and (max-width: 56.25em) {
		height: 90vh;
		flex-direction: column;
	}
	@media only screen and (max-width: 37.5em) {
		height: 80vh;
		flex-direction: column;
	}
	@media only screen and (max-width: 25em) {
		height: 70vh;
		flex-direction: column;
	}
`;

const YearContent = styled.p`
	font-size: 1.6rem !important;
	margin: 0 auto;
	padding: 0;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	color: #f0f0f0;
	box-sizing: border-box;
	text-align: justify;
	display: none;
	text-transform: none;
`;

const YearTitle = styled.h2`
	font-size: 4rem;
	text-transform: uppercase;
	font-weight: 700;
	color: #f0f0f0;
	display: inline-block;
	letter-spacing: 0.2rem;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	margin: 0;
	padding: 0;
	max-width: 90%;
	display: none;
	top: 50%;
	position: absolute;
`;

const MoreLink = styled(Link)`
	text-decoration: none;
	font-size: 1.6rem;
	color: #f0f0f0;
	transition: all 0.4s;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	&:hover,
	&:active,
	&:focus {
		text-decoration: none;
		font-size: 1.6rem;
		color: #f0f0f0;
		transition: all 0.4s;
		display: inline-block;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
		line-height: 1.7;
		border-bottom: 1px solid #f0f0f0;
	}
	&:hover::after,
	&:active::after,
	&:focus::after {
		content: ' →';
	}
	display: none;
`;

const YearImageBox = styled.div`
	@keyframes moveInContent {
		0% {
			opacity: 0;
			transform: translateY(5rem);
		}
		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
	width: ${(props) => 100 / props.len}%;
	padding: 0;
	margin: 0;
	height: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	position: relative;
	background-image: linear-gradient(
			to right,
			rgba(22, 22, 22, 0.7),
			rgba(22, 22, 22, 0.7)
		),
		url(${(props) =>
			githubRawAsserts +
			props.year +
			'/common/ava' +
			props.year +
			'-full.png'});
	background-size: cover;
	background-position: 50%;
	transition: all 0.5s ease;
	&:hover {
		width: 60%;
		background-image: linear-gradient(
				to bottom,
				rgba(232, 8, 114, 0.6),
				rgba(89, 35, 104, 0.7)
			),
			url(${(props) =>
				githubRawAsserts +
				props.year +
				'/common/ava' +
				props.year +
				'-full.png'});
		${YearContent} {
			display: block;
			animation: moveInContent 0.4s ease-out 0.6s;
			animation-fill-mode: backwards;
			@media only screen and (max-width: 56.25em) {
				display: none;
			}
		}
		${YearTitle} {
			display: block;
			animation: moveInContent 0.4s ease-out 0.6s;
			animation-fill-mode: backwards;
			@media only screen and (max-width: 56.25em) {
				display: ${(props) => (props.active ? 'block' : 'none')};
			}
		}
		${MoreLink} {
			display: inline-block;
			animation: moveInContent 0.4s ease-out 0.6s;
			animation-fill-mode: backwards;
			@media only screen and (max-width: 56.25em) {
				display: ${(props) => (props.active ? 'block' : 'none')};
				border-bottom: none;
			}
		}
	}
	@media only screen and (max-width: 56.25em) {
		background-image: ${(props) =>
				props.active
					? 'linear-gradient(to bottom, rgba(232, 8, 114, 0.6), rgba(89, 35, 104, 0.7))'
					: 'linear-gradient(to right,rgba(22, 22, 22, 0.7), rgba(22, 22, 22, 0.7))'},
			url(${(props) =>
				githubRawAsserts +
				props.year +
				'/common/ava' +
				props.year +
				'-full.png'});
		width: 100%;
		height: ${(props) => (props.active ? 80 : 100 / props.len)}%;
		transition: all 0.5s ease;
		&:hover {
			width: 100%;
			background-image: ${(props) =>
					props.active
						? 'linear-gradient(to bottom, rgba(232, 8, 114, 0.6), rgba(89, 35, 104, 0.7))'
						: 'linear-gradient(to right,rgba(22, 22, 22, 0.7), rgba(22, 22, 22, 0.7))'},
				url(${(props) =>
					githubRawAsserts +
					props.year +
					'/common/ava' +
					props.year +
					'-full.png'});
		}
	}
`;

const YearNumber = styled.h3`
	font-size: 2.4rem;
	font-weight: 700;
	text-transform: uppercase;
	color: #fbfeff;
	position: absolute;
	bottom: 50%;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	border-top: 1px solid #fbfeff;
	border-bottom: 1px solid #fbfeff;
	max-width: 100%;
`;

const years = [
	{
		year: 2020,
		title: 'Bùng nổ',
		content:
			'Đánh dấu là một năm bùng nổ của SheCodes trong việc đồng hành giúp phái nữ dấn thân vào CNTT với hàng loạt sự kiện công nghệ mới như IT Fair, Tech Marathon, Tech Talk cùng với sự trở lại của SheCodes Hackathon 2020 được tổ chức đồng thời ở cả Hà Nội và Hồ Chí Minh.',
		more: '2020',
		event: [
			{
				location: 'Hà Nội',
				time: '5/2020',
				title: 'IT Fair',
				content:
					'Cùng VOCF đồng tổ chức chương trình Tech Online Career Fair 2020 nhằm hỗ trợ trang bị kỹ năng nghề nghiệp và tìm kiếm cơ hội việc làm trong ngành IT.',
			},
			{
				location: 'Hà Nội',
				time: '4/2020',
				title: 'Tech Marathon',
				content:
					'Chuỗi các lớp học "crash course" trong vòng 3 ngày dành cho những người chưa có kinh nghiệp lập trình, tập trung vào hai mảng: Kỹ năng lập trình (Technical skills) & Định hướng nghề nghiệp (Career Exploration).',
			},
		],
	},
	{
		year: 2019,
		title: 'Phát triển',
		content:
			'SheCodes Hackathon được mở rộng tổ chức tại TP. HCM, cùng với các sự kiện công nghệ khác, mang đến tác động rộng rãi hơn cho cộng đồng phái nữ để thúc đẩy nữ giới tham gia vào lĩnh vực CNTT.',
		more: '2019',
		event: [
			{
				location: 'Hồ Chí Minh',
				time: '12/2019',
				title: 'Workshop Breaking into Product Management',
				content:
					'Chia sẻ những thông tin về ngành PM cũng như cơ hội việc làm, nhu cầu nhân lực của ngành hiện nay tại Việt Nam.',
			},
			{
				location: 'Hà Nội',
				time: '7/2019',
				title: 'SheCodes Hackathon',
				content:
					'Song song với coding là 5 tech talk và 9 workshop đến từ khách mời và mentor giúp thí sinh hoàn thành tốt nhất sản phẩm của mình.',
			},
			{
				location: 'Hồ Chí Minh',
				time: '4/2019',
				title: 'Workshop Girl in Data Science',
				content:
					'Chia sẻ kinh nghiệm của hai diễn giả trong lĩnh vực Data Analytics và Business Analytics.',
			},
		],
	},
	{
		year: 2018,
		title: 'Ra đời',
		content:
			'SheCodes Vietnam được thành lập, với sự kiện tiên phong mang tên SheCodes Hackathon - sân chơi hackathon dành riêng cho phái nữ đầu tiên tại Việt Nam, thu hút gần 100 người tham gia và truyền cảm hứng cho hơn 10 ý tưởng sáng tạo.',
		more: '2018',
		event: [
			{
				location: 'Hồ Chí Minh',
				time: '12/2018',
				title: 'Workshop Introducing to WebPack',
				content:
					'Cung cấp trải nghiệm setup Webpack 4 từ Scratch để xây dựng một sản phẩm ứng dụng hoàn chỉnh.',
			},
			{
				location: 'Hà Nội',
				time: '11/2018',
				title: 'Talkshow Women In Tech',
				content:
					'Chuỗi sự kiện chia sẻ và định hướng cho nữ giới trong lĩnh vực công nghệ thông tin.',
			},
			{
				location: 'Hà Nội',
				time: '7/2018',
				title: 'SheCodes Hackathon',
				content:
					'Sân chơi hackathon dành riêng cho phái nữ đầu tiên tại Việt Nam.',
			},
		],
	},
];

const YearsItemsBox = styled.article`
	scroll-behavior: smooth;
`;

const YearItemBackground = styled.div`
	background-image: url(${(props) =>
		githubRawAsserts + props.year + '/hackathon/event.jpg'});
	height: 500px;
	max-height: 600px;
	width: 100%;
	background-position: center center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
`;

const YearItemBox = styled.div`
	background-color: #000;
	padding-top: 15rem;
	padding-bottom: 10rem;
`;

const YearItemHeader = styled.h2`
	text-align: center !important;
	padding: 0;
	margin: 0;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 4rem;
	text-transform: uppercase;
	font-weight: 700;
	background-image: linear-gradient(to right, #e80872, #592368);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	display: inline-block;
	letter-spacing: 0.2rem;
	transition: all 0.2s;
	box-sizing: border-box;
	line-height: 1.7;
`;

const YearItem = styled.div`
	display: flex;
	max-width: 1140px;
	margin: 0 auto;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 2rem;
	&:not(:last-child) {
		margin-bottom: 5rem;
	}
	@media only screen and (max-width: 56.25em) {
		flex-direction: column;
		padding-left: 2.5rem;
		padding-right: 2.5rem;
		&:not(:last-child) {
			margin-bottom: 10rem;
		}
	}
`;

const YearItemMetadata = styled.h3`
	font-size: 2rem;
	margin: 0px;
	text-align: right;
	align-self: center;
	width: ${100 / 5}%;
	padding-right: 5rem;
	@media only screen and (max-width: 56.25em) {
		order: ${(props) => props.order_reponsive};
		text-align: center;
		width: 100%;
		padding: 0;
	}
`;

const YearItemTitle = styled.h3`
	font-size: 2.4rem;
	font-weight: 700;
	text-transform: uppercase;
	color: #fbfeff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	width: ${(4 * 100) / 5}%;
	text-align: left;
	@media only screen and (max-width: 56.25em) {
		order: 1;
		text-align: center;
		width: 100%;
	}
`;

const YearItemContent = styled.p`
	font-size: 2rem;
	margin: 0 auto;
	text-align: justify !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	box-sizing: border-box;
	font-weight: 400;
	color: #f0f0f0;
	padding-right: 5rem;
	width: ${(4 * 100) / 5}%;
	@media only screen and (max-width: 56.25em) {
		padding: 0;
		width: 100%;
		order: ${(props) => props.order_reponsive};
		padding-top: 2rem;
	}
`;

const YearsItems = (props) => {
	let yearsItemsComponent = [];
	const years = props.years;
	for (let i = 0; i < years.length; i++) {
		const year = years[i];
		yearsItemsComponent.push(
			<YearItemBackground
				year={year.year}
				key={'bg_year_' + i}
			></YearItemBackground>
		);
		const event = year.event;
		let eventComponent = [];
		for (let j = 0; j < event.length; j++) {
			const item = event[j];
			eventComponent.push(
				<YearItem key={'event_' + j}>
					<YearItemMetadata as='time' dateTime={item.time} order_reponsive={2}>
						{item.time}
					</YearItemMetadata>
					<YearItemTitle>{item.title}</YearItemTitle>
					<YearItemMetadata order_reponsive={3}>
						{item.location}
					</YearItemMetadata>
					<YearItemContent order_reponsive={4}>{item.content}</YearItemContent>
				</YearItem>
			);
		}
		yearsItemsComponent.push(
			<YearItemBox key={'box_year_' + i} id={year.more}>
				<YearItemHeader>{year.year}</YearItemHeader>
				{eventComponent}
			</YearItemBox>
		);
	}
	return <YearsItemsBox>{yearsItemsComponent}</YearsItemsBox>;
};

const YearsCover = (props) => {
	const [yearActive, setYearActive] = useState(0);
	let yearsComponenent = [];
	const years = props.years;
	for (let i = 0; i < years.length; i++) {
		const year = years[i];
		yearsComponenent.push(
			<YearImageBox
				key={year.year}
				year={year.year}
				len={years.length}
				active={yearActive === year.year}
				onClick={() => {
					setYearActive(yearActive === year.year ? 0 : year.year);
				}}
			>
				<YearNumber>{year.year}</YearNumber>
				<YearTitle>
					{year.title}
					<YearContent>{year.content}</YearContent>
					<MoreLink smooth to={'/event#' + year.more}>
						Đọc thêm
					</MoreLink>
				</YearTitle>
			</YearImageBox>
		);
	}
	return <YearBox>{yearsComponenent}</YearBox>;
};

const Event = (props) => {
	return (
		<EventBox>
			<YearsCover years={years} />
			<YearsItems years={years} />
		</EventBox>
	);
};

export default Event;
