import styled from "@emotion/styled";

export const HeaderWrapper = styled.main`
  height: 80px;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const HeaderMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
`;

export const HeaderMenu = styled.button`
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
