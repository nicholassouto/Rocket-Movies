import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => (isNew ? "transparent" : theme.COLORS.BACKGROUND_800)};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: ${({ theme, isNew }) => (isNew ? `1px dashed ${theme.COLORS.BORDER}` : "none")};
  border-radius: 1rem;

  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 5.6rem;
    width: 100%;
    background: transparent;
    border: none;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;
