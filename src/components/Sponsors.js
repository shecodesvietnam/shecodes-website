import React from 'react';
import styled from 'styled-components';

import { FlexBox, Box } from './common/Box';
import { NormalText } from './common/Text';

const githubRawAsserts =
	'https://raw.githubusercontent.com/shecodesvietnam/asserts/master/2020/';

const PartnerBox = styled.div`
	background-color: #000;
	padding-top: 10rem;
	padding-bottom: 10rem;
`;

const PartnerBoxHCM = styled.div`
	background-color: #000;
	padding-bottom: 10rem;
`;

const sponsors_hn = [
	{
		name: 'Đơn vị đồng tổ chức',
		images: [
			githubRawAsserts + 'sponsors/hn/bkhup.jpg',
			githubRawAsserts + 'sponsors/hn/women_techmarkers.png',
		],
	},
	{
		name: 'Nhà Tài Trợ Kim Cương',
		images: [
			'https://vuhuycto.github.io/shecodesdemo/assets/CSDS%20logo_final%20with%20slogan.jpg',
			githubRawAsserts + 'sponsors/OSAM.png',
		],
	},
	{
		name: 'Nhà Tài Trợ Vàng',
		images: [
			'https://vuhuycto.github.io/shecodesdemo/assets/globalcare-logo.jpg',
			'https://vuhuycto.github.io/shecodesdemo/assets/openm-logo.jpg',
			githubRawAsserts + 'sponsors/hn/ai4e.png',
		],
	},
	{
		name: 'Nhà Tài Trợ Bạc',
		images: [
			'https://vuhuycto.github.io/shecodesdemo/assets/sutunam-logo.jpg',
			'https://vuhuycto.github.io/shecodesdemo/assets/logo-ebiv-.jpg',
			'https://vuhuycto.github.io/shecodesdemo/assets/colorme-logo.jpg',
		],
	},
	{
		name: 'Đối tác',
		images: [
			'https://vuhuycto.github.io/shecodesdemo/assets/logo-Summit-01-1024x292.jpg',
			githubRawAsserts + 'sponsors/hn/wise.png',
			githubRawAsserts + 'sponsors/hn/rudicaf.png',
		],
	},
];

const sponsors_hcm = [
	{
		name: 'Đồng tổ chức',
		images: [githubRawAsserts + '/sponsors/hcm/vtc.png'],
	},
	{
		name: 'Nhà tài trợ kim cương',
		images: [githubRawAsserts + '/sponsors/hcm/lian.png'],
	},
	{
		name: 'Nhà tài trợ vàng',
		images: [githubRawAsserts + '/sponsors/hcm/topcv.png'],
	},
	{
		name: 'Đối tác chuyên môn',
		images: [githubRawAsserts + '/sponsors/hcm/tiki.png'],
	},
	{
		name: 'Bảo trợ truyền thông',
		images: [githubRawAsserts + 'sponsors/hcm/ybox.png'],
	},
	{
		name: 'Đối  tác truyền thông',
		images: [githubRawAsserts + 'sponsors/hcm/coc_sai_gon.jpg'],
	},
];

const SponsorsBox = styled.div`
	margin: auto;
	margin-top: 6rem;
	box-sizing: border-box;
	padding: 0;
	background-color: #000;
	padding-bottom: 5rem;
`;

const SponsorsThankyouBox = styled.div`
	width: 100%;
	margin-top: 6rem;
	background-color: #161616;
	border-bottom: 1px solid #3f3f3f;
	@media only screen and (max-width: 25em) {
	}
`;

const SponsorsThankYouTextBox = styled.div`
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

const SponsorsThankYouText = styled.h1`
	font-size: 4rem;
	width: 95%;
	margin: 0 auto;
	line-height: 1.7;
	background-image: linear-gradient(to right, #e80872, #592368);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	@media only screen and (max-width: 56.25em) {
		font-size: 2rem;
		line-height: 1.5;
	}
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	box-sizing: border-box;
`;

const SponsorsList = () => (
	<React.Fragment>
		<PartnerBox>
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
				ĐỐI TÁC HÀ NỘI
			</NormalText>
			{sponsors_hn.map((value, index) => (
				<Box
					key={'sponsors_' + index}
					margin='8rem auto 8rem auto'
					smallMargin='6rem auto 6rem auto'
				>
					<NormalText
						as='h3'
						margin='0 0 1.5rem 0'
						display='block'
						textAlign='center'
						fontSize='2.4rem'
						lineHeight='1.7'
					>
						{value.name}
					</NormalText>
					<FlexBox maxWidth margin='auto' addition='justify-content: center;'>
						{value.images.map((image, i) => (
							<Box
								width={`${100 / (value.images.length + index)}%`}
								padding='1%'
								key={'sponsor_' + i}
								smallWidth='50%'
								smallMargin='0 auto'
							>
								<Box
									as='img'
									src={image}
									alt={image}
									addition='max-width: 100%;'
								/>
							</Box>
						))}
					</FlexBox>
				</Box>
			))}
		</PartnerBox>
		<PartnerBoxHCM>
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
				ĐỐI TÁC HỒ CHÍ MINH
			</NormalText>
			{sponsors_hcm.map((value, index) => (
				<Box
					key={'sponsors_' + index}
					margin='8rem auto 8rem auto'
					smallMargin='6rem auto 6rem auto'
				>
					<NormalText
						as='h3'
						margin='0 0 1.5rem 0'
						display='block'
						textAlign='center'
						fontSize='2.4rem'
						lineHeight='1.7'
					>
						{value.name}
					</NormalText>
					<FlexBox maxWidth margin='auto' addition='justify-content: center;'>
						{value.images.map((image, i) => (
							<Box
								width={`${
									100 / (value.images.length + index + (index === 0 ? 0 : 2))
								}%`}
								padding='1%'
								key={'sponsor_' + i}
								smallWidth='50%'
								smallMargin='0 auto'
							>
								<Box
									as='img'
									src={image}
									alt={image}
									addition='max-width: 100%;'
								/>
							</Box>
						))}
					</FlexBox>
				</Box>
			))}
		</PartnerBoxHCM>
	</React.Fragment>
);

const Sponsors = (props) => {
	return (
		<SponsorsBox>
			<SponsorsThankyouBox>
				<SponsorsThankYouTextBox>
					<SponsorsThankYouText>
						Shecodes Việt Nam chân thành cảm ơn sâu sắc các nhà tài trợ, các
						doanh nghiệp, tổ chức đã, đang và sẽ đồng hành cùng chúng tôi thực
						hiện giấc mơ trao quyền, khuyến khích phái nữ dấn thân vào lĩnh vực
						công nghệ, gia tăng nguồn nhân lực chất lượng, nhiệt huyết, đóng góp
						tích cực vào công cuộc chuyển đổi số hoá tại Việt Nam.
					</SponsorsThankYouText>
				</SponsorsThankYouTextBox>
			</SponsorsThankyouBox>
			<SponsorsList />
		</SponsorsBox>
	);
};

export default Sponsors;
export { SponsorsList };
