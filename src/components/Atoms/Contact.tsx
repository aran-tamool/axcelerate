import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 52px;
  border-radius: 6px;
  padding: 8px;
  gap: 12px;
  background: #ffffff;
  &:hover {
    background: #f2f5f7;
  }
  &:active {
    background: #e6ecef;
  }

  media (min-width: 768px) {
    width: 384px;
  }
`;

const StyledImage = styled(Image)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 8px;
`;

const ContactDetailsWrapper = styled.div`
  align-content: center;
`;

const Name = styled.div<{ enabled: boolean }>`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: ${({ enabled }) => (enabled ? "#6B46EF" : "#20374b")};
`;
const Email = styled.div`
  font-family: Roboto;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #5a6d80;
`;

export type ContactProps = {
  image: string;
  enabled: boolean;
  name: string;
  email?: string;
};
export const Contact = (props: ContactProps) => {
  return (
    <>
      <Container role="listitem">
        <StyledImage src={props.image} alt="image" width={36} height={36} />
        <ContactDetailsWrapper>
          <Name enabled={props.enabled}> {props.name} </Name>
          {props.email && <Email> {props.email} </Email>}
        </ContactDetailsWrapper>
      </Container>
    </>
  );
};
