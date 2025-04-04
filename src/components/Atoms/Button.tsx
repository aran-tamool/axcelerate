import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label?: string;
  /** Optional click handler */
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  ${({ primary }) =>
    primary
      ? css`
          background-color: #555ab9;
          color: white;
        `
      : css`
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
          background-color: transparent;
          color: #333;
        `}
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          padding: 10px 16px;
          font-size: 12px;
        `;
      case "medium":
        return css`
          padding: 11px 20px;
          font-size: 14px;
        `;
      case "large":
        return css`
          padding: 12px 24px;
          font-size: 16px;
        `;
      default:
        return css`
          padding: 11px 20px;
          font-size: 14px;
        `;
    }
  }}
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      size={size}
      backgroundColor={backgroundColor}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
