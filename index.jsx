import { styled } from "@linaria/react";
import React from "react";
import ReactDOM from "react-dom";
import Other from "./Other";

const StyledOther = styled(Other)``;
ReactDOM.render(
  <StyledOther>Hello</StyledOther>,
  window.document.body
);
