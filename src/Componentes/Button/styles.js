import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: 0;
  padding: 0 3.2rem;
  margin: 1.3rem 0;
  border-radius: 1rem;

  font-weight: 500;
  line-height: 2.1rem;
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;  

  &:disabled {
    opacity: 0.5;
  }
`;
