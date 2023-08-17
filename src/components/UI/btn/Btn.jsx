import styled from 'styled-components';

const Btn = styled.button`
  font-size: 18px;
  background-color: #22c55e;
  color: white;
  padding: 16px 28px;
  border-radius: 5px;
  font-weight: 500;
  border: none;
  line-height: 1;
`;

export const GreyBtn = styled(Btn)`
  color: #333f51;
  background-color: #d5dae1;
`;

export default Btn;
