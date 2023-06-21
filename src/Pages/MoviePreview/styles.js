import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "back"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    margin: 0 13rem 8.4rem 13rem;
    padding-right: 3rem;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
      border: none;
    }
  }

  .back {
    display: flex;
    width: fit-content;
  }

  .deleteNote {
    display: flex;
    align-items: center;
    svg {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  .movie-info {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;

    text-align: justify;

    margin-top: 4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    p {
      word-wrap: break-word;
      overflow: hidden;
    }
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

  > div {
    margin: auto 13rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4rem;
  }
`;

export const MovieTitle = styled.div`
  height: 13.5rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
  }

  > div h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    margin-right: 2rem;
    margin-top: 2.4rem;
  }

  > div svg {
    height: 2rem;
    width: fit-content;
    margin-top: 0.7rem;
  }

  > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;

    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.5rem;
    }
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
