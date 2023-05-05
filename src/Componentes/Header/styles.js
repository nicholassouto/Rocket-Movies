import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 11.6rem;
  width: 100%;
  border-bottom: 0.1rem;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.COLORS.BORDER};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem 12.3rem;
`;

export const Title = styled.div`
  width: fit-content;
  height: 3.2rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Search = styled.form`
  width: 100%;
  padding: 0 6.4rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0.9rem;

    strong {
      width: 12.5rem;
      height: 1.8rem;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      width: 2.6rem;
      height: 1.8rem;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin-right: 2.5rem;
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
