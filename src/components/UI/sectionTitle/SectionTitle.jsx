import styled from 'styled-components';
import Pill from '../pill/Pill';

const Wrap = styled.div`
  text-align: ${(props) => (props.$left ? 'left' : 'center')};
  margin-bottom: 48px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
`;
const Subtitle = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: normal;
`;

export default function SectionTitle(props) {
  return (
    <Wrap $left={props.left}>
      <Pill>Features</Pill>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Wrap>
  );
}
