import React from 'react';
import styled from 'styled-components';

const TechMarathonBox = styled.div`
	margin: auto;
	margin-top: 6rem;
	box-sizing: border-box;
	padding: 0;
`;

const MarathonHeaderImage = styled.div`
	width: 100%;
	margin-top: 6rem;
	height: 92vh;
	background-image: linear-gradient(
			to right,
			rgba(22, 22, 22, 0.8),
			rgba(0, 0, 0, 0.8)
		),
		url('https://vuhuycto.github.io/shecodesdemo/assets/precoding-1.png');
	background-position: center;
	background-size: cover;
	position: relative;
`;

const MarathonHeaderText = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	text-align: center !important;
	font-size: 5rem;
	color: #fbfeff;
	line-height: 10rem;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: bold;
`;

const MarathonHeaderNote = styled.p`
	font-size: 1.6rem !important;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	color: #f0f0f0;
	font-style: italic;
	margin-top: 4rem !important;
	@media only screen and (max-width: 56.25em) {
		margin-top: 3rem !important;
	}
`;

const MarathonRow = styled.div`
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

	.col-1-of-5 {
		width: calc((100% - 4 * 6rem) / 5);
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

const MarathonAboutBox = styled.article`
	background-color: #000;
	padding-top: 15rem;
	padding-bottom: 20rem;
`;

const MarathonColumn = styled.div`
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

const MarathonParagraph = styled.p`
	text-align: justify;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	line-height: 1.7;
	color: #f0f0f0;
	font-size: 2rem;
`;

const MarathonAboutHeaderText = styled.h2`
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
	margin-bottom: 4rem !important;
	@media only screen and (max-width: 56.25em) {
		margin-bottom: 3rem !important;
	}
`;

const MarathonProgressBox = styled.article`
	background-image: linear-gradient(
			to right,
			rgba(22, 22, 22, 0.8),
			rgba(0, 0, 0, 0.8)
		),
		url('https://vuhuycto.github.io/shecodesdemo/assets/precoding-2.png');
	background-position: center;
	background-size: cover;
	padding-top: 15rem;
	padding-bottom: 15rem;
	text-align: center;
`;

const MarathonProgressHeaderText = styled(MarathonAboutHeaderText)`
	font-size: 4rem;
	text-transform: uppercase;
	font-weight: 700;
	color: #fbfeff;
	display: inline-block;
	letter-spacing: 0.2rem;
	transition: all 0.2s;
	margin: 0 !important;
	padding: 0 !important;
`;

const MarathonProgessIcon = styled.i`
	font-size: 5rem;
	line-height: 1.7;
`;

const MarathonProgessText = styled.h3`
	margin-bottom: 4rem !important;
	@media only screen and (max-width: 56.25em) {
		margin-bottom: 3rem !important;
	}
	font-size: 2.4rem;
	font-weight: 700;
	text-transform: uppercase;
	color: #fbfeff;
	text-align: center;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	width: 100%;
`;

const MarathonFeaturesHeaderText = styled(MarathonAboutHeaderText)`
	margin: 0 !important;
	padding: 0 !important;
`;

const MarathonFeaturesRow = styled(MarathonRow)`
	margin-bottom: 8rem !important;
`;

const FeaturesMap = [
	{
		header: '1. LỚP HỌC ẤM CÚNG, GIÁ CẢ PHẢI CHĂNG',
		content: [
			'Ngày nay, Web Programming là một kỹ năng quan trọng để bạn kinh doanh, tiếp cận nhiều người, xây dựng thương hiệu cá nhân qua viết, thiết kế, trình bày dự án, … từ đó tăng lợi thế cạnh tranh trên thị trường tuyển dụng. Hẳn các bạn trẻ trong quá trình phát triển bản thân từng ước có một nơi để cất lên tiếng nói của mình với nhiều người hơn, website chính là một hình thức đó.',
			'499.000VND cho một khóa học lập trình web là mức giá ưu đãi từ MindX với các học viên của SheCodes với mong muốn đem công nghệ tiếp cận nhiều hơn. Trong khuôn khổ Tech Marathon - khóa học code cho newbie theo dạng mentoring step-by-step, bạn sẽ:',
			[
				'Có sản phẩm là 1 website cá nhân sau khi hoàn thành khóa học.',
				'Được hướng dẫn các tiếp cận khi muốn tạo ra một website, không đơn thuần là học syntax của HTML và CSS.',
				'Được hỗ trợ 1 - 1, giải đáp, viết code trong suốt quá trình học.',
				'Được nhận chứng nhận từ SheCodes khi hoàn thành project cuối khóa.',
				'Được hướng dẫn để học lên mức khó hơn của các ngôn ngữ lập trình.',
				'Trò chuyện, định hướng cùng những người có kinh nghiệm về sự nghiệp bản thân trong ngành lập trình.',
			],
		],
	},
	{
		header: '2. SẮP XẾP HÌNH THỨC HỌC ĐA DẠNG',
		content: [
			'Không chỉ có giờ học trên lớp, Tech Marathon còn đan xen hoạt động như:',
			[
				'Q&A: Hỏi đáp.',
				'Giờ chữa bài và định hướng tư duy.',
				'Group học tập online.',
				'Tương tác trong giờ học: hình ảnh, âm thanh, công nghệ. Biết đâu học xong bạn lại rinh được vài tips, trang web hay ho có thể ứng dụng trong công việc của mình nhỉ.',
			],
			'Ngoài ra, các bạn được cung cấp tài liệu, bài giảng trước khi đến lớp. Hãy sắp xếp thời gian và chuẩn bị một tâm thế sẵn sàng, tự tin nhất tham gia lớp học nhé.',
		],
	},
	{
		header: '3. ĐỘI NGŨ HỖ TRỢ THÂN THIỆN',
		content: [
			'Không phải những chuyên gia trong ngành hay giảng viên cao siêu mà là những học sinh, sinh viên - thành viên của SheCodes sẽ đi cùng các bạn. Họ là những người bạn tầm tuổi bạn, từng trải qua và vượt qua những cản trở y như bạn, ở đây đồng lòng mong muốn chia sẻ kinh nghiệm cho phái nữ.',
		],
	},
	{
		header: '4. CHÚ TRỌNG VÀO CHẤT LƯỢNG HƠN SỐ LƯỢNG',
		content: [
			'Trong 6 tiếng ngắn ngủi, bạn không thể nhồi nhét ngay lập tức quá nhiều kiến thức, công cụ lập trình vì bạn … sẽ quên ngay thôi. SheCodes chú trọng:',
			[
				'Ai cũng có thể hiểu được, nhất là các bạn chưa có nhiều kinh nghiệm về code;',
				'Nhớ được nhiều nhất có thể;',
				'Ứng dụng trực quan, bạn học làm web nên bạn học xong sẽ code ra một trang web!',
			],
		],
	},
	{
		header: '5. LEARNING PATH SAU KHI KẾT THÚC KHÓA HỌC',
		content: [
			'Bạn hoang mang trong quá nhiều thông tin, bạn sợ học trước quên sau không biết để làm gì? Chúng mình đã chuẩn bị những chỉ dẫn cần thiết giúp bạn tự học, lựa chọn công nghệ, và lúc nào cũng sẵn sàng giúp đỡ trong khả năng khi bạn cần. Đảm bảo các cô gái không bị bỏ lại phía sau!',
		],
	},
];

const MarathonParaFragment = styled.p`
	font-size: 1.6rem;
	line-height: 1.7;
	margin: 0;
	padding: 0;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	display: block;
	text-align: justify !important;
	&:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

const MarathonFeaturesItemHeaderText = styled.h3`
	margin-bottom: 1.5rem !important;
	font-size: 2.4rem;
	font-weight: 700;
	text-transform: uppercase;
	color: #fbfeff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.7;
	text-align: justify !important;
`;

const generateFeaturesComponent = (FeaturesMap) => {
	let FeaturesComponent = [];
	for (let i = 0; i < FeaturesMap.length; i++) {
		const features = FeaturesMap[i];
		const features_array = features.content;
		let ansComponents = [];
		for (let j = 0; j < features_array.length; j++) {
			const feature = features_array[j];
			console.log(typeof feature, feature);
			if (Array.isArray(feature)) {
				ansComponents.push(
					<ul
						key={'ul_' + i}
						style={{ paddingLeft: '2rem', marginBottom: '3rem' }}
					>
						{feature.map((value, index) => (
							<MarathonParaFragment
								as='li'
								key={'li_' + index}
								style={{ display: 'list-item', margin: '0' }}
							>
								{value}
							</MarathonParaFragment>
						))}
					</ul>
				);
			} else if (typeof feature === 'object') {
				ansComponents.push(
					<MarathonParaFragment {...feature} key={'ans_' + j}>
						{feature.insideText}
					</MarathonParaFragment>
				);
			} else if (typeof feature === 'string') {
				ansComponents.push(
					<MarathonParaFragment key={'ans_' + j} style={{ display: 'block' }}>
						{feature}
					</MarathonParaFragment>
				);
			}
		}
		FeaturesComponent.push(
			<MarathonFeaturesRow key={'features_' + i}>
				<MarathonFeaturesItemHeaderText>
					{features.header}
				</MarathonFeaturesItemHeaderText>
				{ansComponents}
			</MarathonFeaturesRow>
		);
	}
	return FeaturesComponent;
};

const MarathonContactText = styled(MarathonFeaturesItemHeaderText)`
	text-align: center !important;
`;

const MarathonContactAddress = styled.a`
	font-size: 2rem;
	text-align: center !important;
	display: block;
	text-decoration: none;
	color: #fbfeff;
	&:hover {
		color: #fbfeff;
		text-decoration: underline;
	}
	font-style: italic;
`;

const MarathonForm = styled.article`
	padding-top: 15rem;
	padding-bottom: 10rem;
	background-image: linear-gradient(
			to right,
			rgba(22, 22, 22, 0.8),
			rgba(0, 0, 0, 0.8)
		),
		url('https://vuhuycto.github.io/shecodesdemo/assets/precoding-3.jpg');
	background-position: 0% 35%;
	background-size: cover;
`;

const TechMarathon = (props) => {
	return (
		<TechMarathonBox>
			<MarathonHeaderImage>
				<MarathonHeaderText>
					Bạn có đủ sức bền chạy theo công nghệ
					<MarathonHeaderNote>
						Lần đầu tiên xuất hiện tại SheCodes
					</MarathonHeaderNote>
				</MarathonHeaderText>
			</MarathonHeaderImage>
			<MarathonAboutBox>
				<MarathonAboutHeaderText>GIỚI THIỆU</MarathonAboutHeaderText>
				<MarathonRow>
					<MarathonParagraph>
						Trong những năm vừa qua, SheCodes Vietnam đã dần khẳng định được vị
						trí của mình trong việc kết nối và xây dựng cộng đồng phái nữ ngành
						Công nghệ thông tin tại Việt Nam - sáng tạo và vô cùng tài năng!
						Tech Marathon là dự án dạy Code được SheCodes Vietnam lập ra với mục
						tiêu đưa công nghệ thông tin đến gần hơn với các bạn, đặc biệt tới
						phái nữ.
					</MarathonParagraph>
				</MarathonRow>
			</MarathonAboutBox>
			<MarathonProgressBox>
				<MarathonRow>
					<MarathonProgressHeaderText>
						QUY TRÌNH TẠO RA LỚP HỌC
					</MarathonProgressHeaderText>
				</MarathonRow>
				<MarathonRow>
					<MarathonColumn className='col-1-of-5'>
						<MarathonProgessIcon className='fas fa-heart' />
						<MarathonProgessText>ĐỒNG CẢM</MarathonProgessText>
					</MarathonColumn>
					<MarathonColumn className='col-1-of-5'>
						<MarathonProgessIcon className='fas fa-pencil-alt' />
						<MarathonProgessText>XÁC ĐỊNH VẤN ĐỀ</MarathonProgessText>
					</MarathonColumn>
					<MarathonColumn className='col-1-of-5'>
						<MarathonProgessIcon className='fas fa-lightbulb' />
						<MarathonProgessText>HÌNH THÀNH Ý TƯỞNG</MarathonProgessText>
					</MarathonColumn>
					<MarathonColumn className='col-1-of-5'>
						<MarathonProgessIcon className='icon-basic-webpage-img-txt' />
						<MarathonProgessText>TẠO MẪU THỬ</MarathonProgessText>
					</MarathonColumn>
					<MarathonColumn className='col-1-of-5'>
						<MarathonProgessIcon className='icon-basic-todolist-pen' />
						<MarathonProgessText>THỬ NGHIỆM</MarathonProgessText>
					</MarathonColumn>
				</MarathonRow>
			</MarathonProgressBox>
			<MarathonAboutBox style={{ paddingBottom: '10rem' }}>
				<MarathonRow>
					<MarathonFeaturesHeaderText>ĐIỂM NỔI BẬT</MarathonFeaturesHeaderText>
				</MarathonRow>
				{generateFeaturesComponent(FeaturesMap)}
			</MarathonAboutBox>
			<MarathonForm>
				<MarathonRow>
					<MarathonAboutHeaderText>
						ĐĂNG KÝ THAM GIA LỚP HỌC
					</MarathonAboutHeaderText>
				</MarathonRow>
				<MarathonRow>
					<MarathonContactText>
						Chương trình đã kết thúc{' '}
						<span role='img' style={{ fontSize: '2.4rem' }} aria-label='sad'>
							😢
						</span>{' '}
						Hẹn gặp các bạn ở các lớp tech marathon tiếp theo
					</MarathonContactText>
				</MarathonRow>
			</MarathonForm>
			<MarathonAboutBox>
				<MarathonRow>
					<MarathonProgressHeaderText>
						MỌI THẮC MẮC VUI LÒNG LIÊN HỆ
					</MarathonProgressHeaderText>
				</MarathonRow>
				<MarathonRow>
					<MarathonContactText>MS. NGUYỄN VŨ NGÂN HÀ</MarathonContactText>
					<MarathonContactAddress href='mailto:hanguyen.shecodes@gmail.com'>
						hanguyen.shecodes@gmail.com
					</MarathonContactAddress>
					<MarathonContactAddress href='tel:+84356640776'>
						0356640776
					</MarathonContactAddress>
				</MarathonRow>
			</MarathonAboutBox>
		</TechMarathonBox>
	);
};

export default TechMarathon;
