import React, { useState } from 'react';
import styled from 'styled-components';

const FAQBox = styled.div`
	margin: auto;
	margin-top: 6rem;
	box-sizing: border-box;
	padding: 0;
	background-color: #000;
`;

const FAQMap = [
	{
		question: '> Các hoạt động của SheCodes có miễn phí không?',
		ans: [
			'SheCodes là tổ chức hoạt động phi lợi nhuận hướng. Vì thế, hầu hết sự kiện đều miễn phí, bao gồm: Hackathon, Workshop công nghệ, Techtalk, Panel.',
			{
				as: 'br',
			},
			'Các sự kiện thu phí sẽ được thông báo trước với người tham gia: Tech Marathon.',
		],
	},
	{
		question: '> Ai có thể tham gia sự kiện của SheCodes?',
		ans: [
			'Các bạn nữ có hứng thú với công nghệ đều có thể tham gia sự kiện của SheCodes.',
		],
	},
	{
		question:
			'> Người không biết code có tham gia được không và bằng cách nào?',
		ans: [
			'Có! Rất nhiều bạn nữ không biết code trước khi tham gia sự kiện của SheCodes. Không sao hết. SheCodes cung cấp các chương trình như workshop lập trình, tech marathon, coding class. Từ đó giúp các bạn có nền tảng lập trình căn bản và các kiến thức cần thiết cho Hackathon.',
		],
	},
	{
		question:
			'> Làm sao để tham gia cộng đồng lập trình cho phái nữ của SheCodes?',
		ans: [
			'Bạn hãy tham gia group này group ',
			{
				as: 'a',
				href: 'https://www.facebook.com/groups/shecodes.hackathon/',
				insideText: 'Hackathon',
			},
			'.',
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

const FAQRow = styled.div`
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
		width: calc(
			2 * ((100% - 2 * 6rem) / 3) + 6rem
		);
	}

	.col-1-of-4 {
		width: calc((100% - 3 * 6rem) / 4);
	}

	.col-2-of-4 {
		width: calc(
			2 * ((100% - 3 * 6rem) / 4) + 6rem
		);
	}

	.col-3-of-4 {
		width: calc(
			3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem
		);
  }
  padding-bottom: 4rem !important; }
  @media only screen and (max-width: 56.25em) {
    padding-bottom: 3rem !important;
  }
  padding-top: 3rem;
`;

const FAQsHeader = styled.h2`
	font-size: 4rem;
	text-transform: uppercase;
	font-weight: 700;
	color: #fbfeff;
	display: inline-block;
	letter-spacing: 0.2rem;
	transition: all 0.2s;
	padding-bottom: 4rem !important;
	@media only screen and (max-width: 56.25em) {
		padding-bottom: 3rem !important;
	}
	padding-top: 8rem !important;
	@media only screen and (max-width: 56.25em) {
		padding-top: 5rem !important;
	}
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

const FAQAnsFragment = styled.p`
	font-size: 1.6rem;
	line-height: 1.7;
	margin: 0;
	padding: 0;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	display: inline;
`;

const generateFAQComponent = (FAQMap) => {
	let FAQComponent = [];
	for (let i = 0; i < FAQMap.length; i++) {
		const faq = FAQMap[i];
		const ans_array = faq.ans;
		let ansComponents = [];
		for (let j = 0; j < ans_array.length; j++) {
			const ans = ans_array[j];
			if (typeof ans !== 'string') {
				ansComponents.push(
					<FAQAnsFragment {...ans} key={'ans_' + j}>
						{ans.insideText}
					</FAQAnsFragment>
				);
			} else {
				ansComponents.push(
					<FAQAnsFragment key={'ans_' + j}>{ans}</FAQAnsFragment>
				);
			}
		}
		FAQComponent.push(
			<FAQsItem
				question={faq.question}
				ansComponents={ansComponents}
				key={'faqs_' + i}
			/>
		);
	}
	return FAQComponent;
};

const FAQ = (props) => {
	return (
		<FAQBox>
			<FAQRow>
				<FAQsHeader>FAQS</FAQsHeader>
				{generateFAQComponent(FAQMap)}
			</FAQRow>
		</FAQBox>
	);
};

export default FAQ;
