import styled from 'styled-components';
import Btn from '../UI/btn/Btn';
import Section from '../UI/section/Section';
import Pill from '../UI/pill/Pill';
import { useState } from 'react';

const Img = styled.img``;

const Title = styled.h1`
  color: white;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -1.2px;
`;

const Subtitle = styled.p`
  color: var(--primary-dark-grey);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 26px;
`;

const Trial = styled.p`
  color: var(--primary-dark-grey);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 20px;
  text-align: center;
  margin-top: 70px;
  margin-left: 140px;
  margin-right: 140px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export default function Hero() {
  const [emailValue, setEmailValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  function emailInput(event) {
    setEmailValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (emailValue.trim() === '') {
      setErrorMessage('Email is required');
    }
    setFormSuccess(true);
  }

  return (
    <Section>
      <Wrap>
        <Img src='/images/hero-background.png' alt='' />
        <TextContainer>
          <Pill secondary={true}>Header</Pill>
          <Title>A small business is only as good as its tools.</Title>
          <Subtitle>
            We&apos; re different. Flex is the only saas business platform that
            lets you run your business on one platform, seamlessly across all
            digital channels.
          </Subtitle>
          {errorMessage !== '' && <Subtitle>{errorMessage}</Subtitle>}
          {!formSuccess && (
            <Form onSubmit={handleSubmit}>
              <input
                onChange={emailInput}
                type='text'
                placeholder='Enter your work email'
              />
              <Btn>Get early access</Btn>
              <Trial>
                Start your free 14-day trial today, no credit card required.
              </Trial>
            </Form>
          )}
          {formSuccess && (
            <div>
              <h2>You have logged in succesfuly</h2>
            </div>
          )}
        </TextContainer>
      </Wrap>
    </Section>
  );
}
