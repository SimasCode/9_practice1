import styled from 'styled-components';
import Section from '../UI/section/Section';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 40px;
`;

const FlexInside = styled.div`
  display: flex;
  gap: ${(props) => (props.secondary ? '24px' : '48px')};
  align-items: center;
`;

const Link = styled.a`
  color: var(--secondary-dark-grey);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const Btn = styled.a`
  color: white;
  background-color: var(--primary-green);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 16px;
  border-radius: 6px;
`;

export default function NavBar() {
  return (
    <Section secondary>
      <Flex>
        <a href='#'>
          <img src='/images/Logo.png' alt='logo' />
        </a>
        <FlexInside>
          <Link href='#'>Product</Link>
          <Link href='#'>Features</Link>
          <Link href='#'>Pricing</Link>
          <Link href='#'>Resources</Link>
        </FlexInside>
        <FlexInside secondary>
          <Link href='#'>Log In</Link>
          <Btn href='#'>Sign Up</Btn>
        </FlexInside>
      </Flex>
    </Section>
  );
}
