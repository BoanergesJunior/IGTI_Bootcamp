import styled from "styled-components";

const StyleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;

  span {
    font-family: monospace;
    font-weight: lighter;
    font-size: 1.3rem;
    margin-top: 36px;
  }
`;

const StyleSelect = styled.select`
  min-width: 64px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  padding: 4px;
`;

export default function Select() {
  return (
    <StyleInfo>
      <StyleSelect />
      <span>Campeonato brasileiro de 2013</span>
      <span>Classificação</span>
    </StyleInfo>
  );
}
