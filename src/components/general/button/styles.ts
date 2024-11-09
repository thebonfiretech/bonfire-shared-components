import styled from "styled-components";

import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  justify-content: center;
  font-family: Montserrat;
  align-content: center;
  height: fit-content;
  cursor: pointer;
  flex-wrap: wrap;
  display: flex;
  border: none;
`;