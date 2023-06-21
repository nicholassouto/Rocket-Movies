import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  .tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2.4rem;
  }

  .save-delete-movies {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
  }

  > main {
    grid-area: content;
    overflow-y: auto;
    margin: 4.1rem 9rem 8.4rem 13rem;
    padding-right: 3rem;
    padding-bottom: 0.1rem;

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
`;

export const NewMovies = styled.div`
  width: 18.5rem;
  height: 9.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;
  margin: 4rem 0;
  
`;

export const Sections = styled.section`
  width: 100%;
  min-height: 13.8rem;

  margin-top: 4rem;
  padding-bottom: 2.4rem;

  color: ${({ theme }) => theme.COLORS.GRAY2};
`;

export const TagWrapper = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  min-width: 100%;
  padding: 1.6rem;
  border-radius: 1rem;
`;

export const DeleteMovies = styled.button`
  width: 100%;
  height: 5.1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 1rem;
  margin-top: 1.2rem;
  margin-right: 2.4rem;
`;
