import styled, { css } from 'styled-components';
import { Box } from './Box';

const Text = styled(Box)`
  text-align: ${props => (props.textAlign ? props.textAlign : "initial")};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${props => (props.fontSize ? props.fontSize : "initial")};
  text-transform: ${props => (props.textTransform ? props.textTransform : "initial")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "initial")};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "initial")};
  color: ${props => (props.color ? props.color : "initial")};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : "initial")};
  display: ${props => (props.display ? props.display : "initial")};
`;

const colorful = css`
  background-image: linear-gradient(to right, #e80872, #592368);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const normal = css`
  color: #f0f0f0;
`;

const ColorfulText = styled(Text)`
  ${colorful}
`;

const NormalText = styled(Text)`
  ${normal}
`;

const AnimationLink = styled(Text)`
  ${ props => props.$colorful ? `${colorful}` : `${normal}`}
  transition: all 0.4s;
  display: inline;
  &:hover, &:active, &:focus {
    text-decoration: none;
    ${ props => props.$colorful ? `${colorful}` : `${normal}`}
    border-bottom: 1px solid ${ props => props.$colorful ? `#e80872` : `#f0f0f0`};
  }
  &:hover::after, &:active::after, &:focus::after {
    content: ' →'; 
  }
`;

export { NormalText, ColorfulText, AnimationLink }