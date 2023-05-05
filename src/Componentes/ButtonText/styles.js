import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 2.1rem;

  display: flex;
  align-items: flex-start;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;

  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;

  > svg {
    margin-right: 0.8rem;
  }
`;
