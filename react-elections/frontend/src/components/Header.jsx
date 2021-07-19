import styled from "styled-components";

const HeadStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
  font-family: monospace;
  font-weight: bolder;
  font-size: 1.5rem;
  padding: 24px;
`;

export default function Header() {
  return <HeadStyle>react-campeonato-brasileiro</HeadStyle>;
}
