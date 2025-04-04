import React from "react";
import styled from "styled-components";
import { ChevronDown, ChevronRight } from "../Atoms/Icons";

const Container = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 37px;
  justify-content: space-between;
  padding-right: 8px;
  padding-left: 16px;
  border-top-width: 1px;
  border-bottom-width: 1px;

  background: #ffffff;
  border-width: 1px 0px 1px 0px;
  border-style: solid;
  border-color: #e4e5e8;

  &:hover {
    background: #f2f5f7;
  }
  &:active {
    background: #e6ecef;
  }

  media (min-width: 768px) {
    width: 400px;
  }
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  align-content: center;
  color: #5a6d80;
`;

const SectionIcon = styled.div`
  align-content: center;
`;

export type HeaderSectionProps = {
  title: string;
  expanded: boolean;
  handleOnClick: () => void;
};
export const HeaderSection = (props: HeaderSectionProps) => {
  return (
    <Container onClick={props.handleOnClick}>
      <Title>{props.title}</Title>
      <SectionIcon>
        {props.expanded ? (
          <ChevronDown data-testid="chevron-down" />
        ) : (
          <ChevronRight data-testid="chevron-right" />
        )}
      </SectionIcon>
    </Container>
  );
};
