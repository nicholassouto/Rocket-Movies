import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_PINK};
  }

  .user-photo {
    position: relative;
    margin: -9.3rem auto 0;
    width: 18.6rem;
    height: 18.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .user-photo img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  .user-photo label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }
  }

  >main footer{
    margin: 2.4rem auto 20.3rem;
    max-width: 34rem;
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 6.4rem auto 0;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 2.4rem;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;
