import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  display: flex;
  flex-direction: row;

  padding: 1.9rem 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 1rem;
  border-style: none;
`;
