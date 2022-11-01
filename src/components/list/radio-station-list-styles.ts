import styled from "@emotion/styled";

export const RadioListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const RadioStationWrapper = styled.div``;

export const RadioStationImg = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
`;

export const RadioStationName = styled.h3`
  word-break: break-all;
`;
