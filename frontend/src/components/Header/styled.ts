import styled from '@emotion/styled';

type IHead = {
  theme: string;
};

export const Head = styled.header<IHead>`
  background-color: var(--header-background);
  height: 100px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
`;
