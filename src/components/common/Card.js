import styled from 'styled-components';
import { FlexBox } from './Box';

const Card = styled(FlexBox)`
  background-color: #000;
	border-radius: 3px;
	border: 1px solid;
	border-image-slice: 1;
  border-width: 1px;
	border-image-source: linear-gradient(
		to left,
		#e80872,
		#592368
  );
  text-decoration: none !important;
  &:hover, &:link, &:active, &:visited {
    text-decoration: none !important;
  }
  transition all .2s ease;
  &:hover {
    ${props => (props.hover ? "transform: translate(0px, -0.4rem);" : "")}   
  }
`;

export { Card };