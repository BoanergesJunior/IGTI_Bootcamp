import styled from "styled-components"

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`
interface SearchInputProps {
  error: boolean
}

const SearchInput = styled.input<SearchInputProps>`
  padding: 0.75rem 2rem;
  width: 80%;
  border-radius: 100px;
  height: 1rem;
  background-color: ${({ error }) => `${error ? "red" : "#999"}`};
  outline: none;
  transition: 0.2s;
  &:focus {
    width: 100%;
  }
`

export const InputSearch = () => {
  return (
    <SearchBar>
      <SearchInput error={true} />
    </SearchBar>
  )
}
