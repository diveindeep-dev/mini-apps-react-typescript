import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 8rem;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 5rem;
`;

function Display() {
  return <H2>0</H2>;
}

export default Display;
