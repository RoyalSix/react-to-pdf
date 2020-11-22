import styled from 'styled-components';

export const Container = styled.div`
  font-size: 45px;
  line-height: 36px;
  color: ${props => (props.color ? props.color : '#101011')};
  font-family: ${props =>
    props.bold
      ? `PublicSans-Bold`
      : props.semibold
        ? 'PublicSans-SemiBold'
        : 'PublicSans-Regular'};
  text-align: ${props =>
    props.right ? 'right' : props.left ? 'left' : 'center'};
`;
