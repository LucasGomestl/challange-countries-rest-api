import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  color: ${({ theme }) => theme.theme.color};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.theme.background};
  cursor: pointer;
`;

export const MainWrapper = styled.main`
  height: 100%;
  padding-top: 50px;
  color: ${({ theme }) => theme.theme.color};
  margin-bottom: 20px;
  box-shadow: ${({ theme }) =>
    theme.dark === false
      ? "inset 5px 8px 10px -6px rgba(0, 0, 0, 0.1)"
      : "inset 5px 8px 10px -6px rgba(0, 0, 0, 0.3)"};
`;
