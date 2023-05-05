import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.6rem;

  width: 100%;

  background-color: ${({ theme }) =>theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.WHITE2};
  border-radius: 0.8rem;
  border-style: none;
  white-space: nowrap;
`;
