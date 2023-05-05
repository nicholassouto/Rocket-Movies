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
  }
`;

export const PageHead = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.74rem 10.6rem auto 12.3rem;

  > h1 {
    width: 18.4;
    height: 4.2rem;

    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > button {
    width: 20.7rem;
    gap: 0.8rem;
    height: 4.8rem;
  }
`;

export const Sections = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 3.76rem 10.6rem 2.4rem 12.3rem;
  gap: 2.4rem;

  > div {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_PINK};
    border-radius: 1.6rem;
    padding: 3.2rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.4rem;
  min-width: fit-content;
  gap: 0.8rem;

  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  justify-content: center;

  margin-top: 1.5rem;
`;
