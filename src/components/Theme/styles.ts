import styled from "styled-components";

export const Container = styled.div`
  background-color: #02054a;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  max-width: 900px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #16195c;
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;
