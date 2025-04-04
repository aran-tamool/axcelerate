import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../Atoms/Icons";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  gap: 8px;
  border-bottom: 1px solid #e4e5e8;
  background: #ffffff;
  border-radius: 6px;
  align-items: center;

  media (min-width: 768px) {
    width: 400px;
  }
`;

const StyledSearchIcon = styled(SearchIcon)``;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
  background-color: #fff;
`;

type SearchFieldProps = {
  handleInput: (value: string) => void;
};
export const SearchField = (props: SearchFieldProps) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    props.handleInput(e.currentTarget.value);
  };

  return (
    <Container>
      <StyledSearchIcon data-testid="search-icon" />
      <SearchInput type="text" placeholder={"Search"} onKeyUp={handleKeyUp} />
    </Container>
  );
};
