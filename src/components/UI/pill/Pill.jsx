import styled from 'styled-components';

const Pill = styled.p`
  display: inline-block;
  border-radius: 36px;
  padding: 2px 8px;
  color: ${(props) => (props.secondary ? 'white' : 'var(--primary-green)')};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  background-color: ${(props) =>
    props.secondary ? 'var(--primary-green)' : 'var(--secondary-ligth-blue)'};
  text-transform: uppercase;
`;

export default Pill;
