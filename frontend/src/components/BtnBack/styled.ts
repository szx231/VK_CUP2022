import styled from '@emotion/styled';
import arrow from '../../assets/arrowBack.svg';

export const Button = styled.button`
  display: flex;
  gap: 20px;
  cursor: pointer;
  margin-right: 34px;
`;

export const Arrow = styled.div`
  width: 7px;
  height: 11px;
  background-image: url(${arrow});
`;

export const Text = styled.div`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;
