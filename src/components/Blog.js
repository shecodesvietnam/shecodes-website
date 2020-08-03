import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Card } from './common/Card';
import { FlexBox } from './common/Box';

const BlogBox = styled.div`
	margin-top: 6rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	background-color: #000;
`;

const BlogImage = styled.img`
	display: block;
	max-width: 100%;
	box-sizing: border-box;
	@media only screen and (max-width: 56.25em) {
		margin-left: 0;
		margin-right: 1rem;
		max-height: 100%;
	}
`;

const BlogText = styled.span`
	font-size: 1.6rem;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	color: #f0f0f0;
	margin: auto;
	margin-top: 1rem;
	margin-botton: 1rem;
	box-sizing: border-box;
	@media only screen and (max-width: 56.25em) {
		margin: auto;
	}
`;

const Blog = (props) => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		axios
			.get('https://shecodes-blog.herokuapp.com/database-blog')
			.then((res) => {
				setArticles(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<BlogBox>
			<FlexBox
				wrap='wrap'
				smallDirection='row'
				margin='auto'
				maxWidth
				addition='justify-content: center;'
			>
				{articles.map((article, index) => (
					<Card
						direction='column'
						smallDirection='row'
						href={article.link}
						target='_blank'
						rel='noopener noreferrer'
						width='30rem'
						key={'card_' + index}
						margin={'0.5rem'}
						padding={'1rem'}
						smallHeight={'13rem'}
						smallWidth={'30rem'}
						hover
						as='a'
					>
						<BlogImage src={article.image} />
						<BlogText>{article.title}</BlogText>
					</Card>
				))}
			</FlexBox>
		</BlogBox>
	);
};

export default Blog;
