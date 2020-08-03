import styled from 'styled-components';

const Box = styled.div`
  box-sizing: border-box;
  width: ${props => (props.width ? props.width : "initial")};
  height: ${props => (props.height ? props.height : "initial")};
  margin: ${props => (props.margin ? props.margin : "initial")};
  padding: ${props => (props.padding ? props.padding : "initial")};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : "initial")};
  ${props => (props.maxWidth ? "max-width: 1140px;" : "")}
  @media only screen and (max-width: 56.25em) {
    margin: ${props => (props.smallMargin ? props.smallMargin : (props.margin ? props.margin : "initial"))};
    padding: ${props => (props.smallPadding ? props.smallPadding : (props.padding ? props.padding : "initial"))};
    width: ${props => (props.smallWidth ? props.smallWidth : (props.width ? props.width : "initial"))};
    height: ${props => (props.smallHeight ? props.smallHeight : (props.height ? props.height : "initial"))};
  }
  ${props => (props.addition ? props.addition : "")}
`;

const FlexBox = styled(Box)`
  display: flex;
  flex-wrap: ${props => (props.wrap)};
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  @media only screen and (max-width: 56.25em) {
    flex-direction: ${props => (props.smallDirection ? props.smallDirection : (props.direction ? props.direction : "column"))};
  }
`;

export { Box, FlexBox };