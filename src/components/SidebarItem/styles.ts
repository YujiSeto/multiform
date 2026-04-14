import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #5a5a5a;
    display: flex;
    align-items: center;
  }

  @media (max-width: 720px) {
    margin: 15px 0;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: #fff;
`;

export const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: #b8b8d4;
`;

export const IconArea = styled.div<{active: boolean}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#25cd89' : '#494a7c'};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    width: 40px;
    height: 40px;
  }
`;

export const Point = styled.div<{active: boolean}>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 3px solid #494a7c;
  margin-left: 30px;
  margin-right: -6px;
  background-color: ${props => props.active ? '#25cd89' : '#02044a'};

  @media (max-width: 720px) {
    display: none;
  }
`;

