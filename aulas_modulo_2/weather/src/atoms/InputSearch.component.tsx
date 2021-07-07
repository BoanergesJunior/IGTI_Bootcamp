import { useEffect, useState } from "react"
import styled from "styled-components"
import searchIcon from "../assets/search-icon.svg"
import useSearch from "../lib/UseSearch"

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
  margin-right: -2rem;
  background-color: ${({ error, theme }) =>
    `${error ? theme.error : theme.secondary}`};
  border: ${({ theme }) => theme.secondary} solid 2px;
  outline: none;
  transition: 0.2s;
  &:focus {
    width: 100%;
  }
`

interface InputSearchProps {
  found: boolean
}

export const InputSearch: React.FC<InputSearchProps> = ({ found }) => {
  const [name, setName] = useState("")
  const { filterCities } = useSearch()

  useEffect(() => {
    filterCities(name)
  }, [name])

  return (
    <SearchBar>
      <SearchInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!found}
      />
      <img src={searchIcon} width="24px" height="24px" alt="search-icon" />
    </SearchBar>
  )
}
