import styled from 'styled-components';
import Section from '../UI/section/Section';

const Title = styled.h3`
  color: var(--secondary-ligth-grey);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img``;

export default function Companies() {
  return (
    <Section>
      <Title>Join 4,000+ companies already growing</Title>
      <Flex>
        <Img src='/images/companies_logo/Logo1.svg' alt='companie-logo'></Img>
        <Img src='/images/companies_logo/Logo2.svg' alt='companie-logo'></Img>
        <Img src='/images/companies_logo/Logo3.svg' alt='companie-logo'></Img>
        <Img src='/images/companies_logo/Logo4.svg' alt='companie-logo'></Img>
        <Img src='/images/companies_logo/Logo5.svg' alt='companie-logo'></Img>
      </Flex>
    </Section>
  );
}
