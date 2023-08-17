import { styled } from 'styled-components';
import GlobalStyle from './components/UI/GlobalStyle';
import Companies from './components/companies/Companies';
import NavBar from './components/navBar/NavBar';
import GainMore from './components/GainMore/GainMore';
import Hero from './components/hero/Hero';

const Wrap = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;

export default function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <Companies />
      <GainMore />
    </Wrap>
  );
}
