import { styled } from "@linaria/react";
import React from "react";
import ReactDOM from "react-dom";
import Other from "./Other";

// if I am inlined, no pb. (uncomment)
// const Other = ({ children }) => <span>{children}</span>;

// if I am not `styled`, no pb (comment)
const StyledOther = styled(Other)``;

ReactDOM.render(
  <StyledOther>Hello</StyledOther>,
  window.document.body
);
