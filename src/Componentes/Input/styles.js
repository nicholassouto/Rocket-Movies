import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 1rem;

  > input {
    width: 100%;

    padding: 1.9rem 2.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  > svg {
    margin-left: 1.6rem;
    margin-top: 2rem;
  }
`;
