import React from "react";
import styled from "styled-components";
import { Contact, ContactProps } from "../Atoms/Contact";

const Container = styled.div`
  width: 100%;

  top: 1128px;
  left: 121px;
  padding-top: 12px;
  padding-right: 8px;
  padding-bottom: 12px;
  padding-left: 8px;
  background: #ffffff;

  media (min-width: 768px) {
    width: 400px;
  }
`;

export type ContactListProps = {
  contacts: ContactProps[];
};
export const ContactList = (props: ContactListProps) => {
  return (
    <Container role="list">
      {props.contacts.map((item, index) => (
        <Contact {...item} key={`${item}_${index}}`} />
      ))}
    </Container>
  );
};
