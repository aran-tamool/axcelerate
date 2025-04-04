import React, { useState } from "react";
import styled from "styled-components";
import { ContactProps } from "../Atoms/Contact";
import { HeaderSection } from "../Molecules/HeaderSection";
import { ContactList } from "../Molecules/ContactList";

const Container = styled.div`
  background: #ffffff;
`;

export type AttendingListProps = {
  contacts: ContactProps[];
  listType: "Attending" | "Absent";
};
export const AttendingList = (props: AttendingListProps) => {
  const [expand, setExpand] = useState(true);
  const handleOnClick = () => {
    setExpand((prev) => !prev);
  };
  return (
    <Container>
      <HeaderSection
        title={props.listType}
        expanded={expand}
        handleOnClick={handleOnClick}
      />
      {expand && <ContactList contacts={props.contacts} />}
    </Container>
  );
};
