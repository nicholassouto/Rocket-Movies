import styled from "styled-components";

import MovieBG from "../../assets/movieBG.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    height: 6.3rem;
    width: 34.2rem;

    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    width: 34.4rem;
    height: 1.8rem;

    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.WHITE2};
  }

  > h2 {
    width: 16.4rem;
    height: 3.2rem;

    margin: 4.2rem auto 4.8rem 0;

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > section {
    width: 34rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 2.4rem;
  }

  > a {
    margin-top: 4.2rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${MovieBG}) no-repeat center center;
  background-size: cover;
`;
