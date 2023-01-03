import styled from '@emotion/styled';

type IText = {
  theme: boolean;
};

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: transparent;
  padding: 12px 16px;
  cursor: pointer;
`;

export const Image = styled.div`
  height: 18px;
  width: 18px;
`;

export const Text = styled.span<IText>`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: var(---text-color);
`;
