import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  .icon {
    font-size: 80px;
    margin-bottom: 20px;
  }

  p {
    font-size: 13px;
    color: #b8b8d4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    background-color: #16195c;
    margin: 30px 0;
    border: 0;
  }

  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1);
    }
  }

  @media (max-width: 720px) {
    .icon {
      font-size: 60px;
    }

    h1 {
      font-size: 22px;
    }

    button {
      padding: 15px 30px;
    }
  }
`;

