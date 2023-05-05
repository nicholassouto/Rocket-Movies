import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    margin: 4.1rem 9rem 8.4rem 13rem;
    padding-right: 3rem;

    
  }

  .movie-info {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;

      text-align: justify;

      margin-top: 4rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

  .tags {
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

export const MovieTitle = styled.div`
  width: 36.8rem;
  height: 13.5rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.9rem;
  }

  > div h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
  }

  > div svg {
    height: 2rem;
    width: 14rem;
    margin-top: 0.7rem;
  }

  > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
  }

  > section img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  > section p {
    color: white;
  }

  > section svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
