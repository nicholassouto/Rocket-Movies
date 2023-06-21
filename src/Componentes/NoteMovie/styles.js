import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_PINK};
  border-radius: 1.6rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > header {
    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > main {
    display: flex;
    flex-direction: row;
    p {
      max-height: 5.5rem;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.9rem;
      word-wrap: break-word;
      overflow: hidden;
      color: ${({ theme }) => theme.COLORS.GRAY2};
    }
  }

  > footer {
    display: flex;
    flex-direction: row;
    height: 2.4rem;
    width: fit-content;
    gap: 0.8rem;

    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;
    justify-content: center;

    margin-top: 1.5rem;
  }
`;
