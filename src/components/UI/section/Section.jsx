import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 100px;
  margin-right: ${(props) => (props.secondary ? '88px' : '150px')};
  margin-left: ${(props) => (props.secondary ? '88px' : '150px')};
`;

export default Section;
