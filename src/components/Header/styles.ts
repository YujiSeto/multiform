import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  border-bottom: 1px solid #16195c;
  text-align: center;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }

  p {
    font-size: 14px;
    color: #b8b8d4;
  }

  @media (max-width: 720px) {
    padding: 20px;

    h1 {
      font-size: 22px;
    }
  }
`;

