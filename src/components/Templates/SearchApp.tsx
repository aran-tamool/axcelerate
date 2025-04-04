import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchField } from "../Molecules/SearchField";
import { ContactType } from "@/types";
import { AttendingList } from "../Organisms/AttendingList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { searchContact } from "@/store/slices/searchSlice";

const Container = styled.div`
  background: #ffffff;
  padding: 1rem;
  width: 100%;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const SearchApp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchResults = useSelector(
    (state: RootState) => state.contacts.searchResults
  );

  const [attendingContactList, setAttendingContactList] = useState<
    ContactType[]
  >([]);
  const [absentContactList, setAbsentContactList] = useState<ContactType[]>([]);

  useEffect(() => {
    if (searchResults) {
      setAttendingContactList(
        searchResults.filter((contact) => contact.attending)
      );
      setAbsentContactList(
        searchResults.filter((contact) => !contact.attending)
      );
    }
  }, [searchResults]);

  const handleInput = (value: string) => {
    dispatch(searchContact(value));
  };
  return (
    <Container>
      <SearchField handleInput={handleInput} />
      <AttendingList listType="Attending" contacts={attendingContactList} />
      <AttendingList listType="Absent" contacts={absentContactList} />
    </Container>
  );
};
