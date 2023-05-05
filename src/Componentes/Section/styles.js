import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  color: ${({ theme }) => theme.COLORS.GRAY2};
  border-style: none;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
