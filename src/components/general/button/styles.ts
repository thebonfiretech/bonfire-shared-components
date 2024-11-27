import theme from "../../../styles/theme";
import styled from "styled-components";

import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => theme.colors[props.backgroundColor]};
  border-radius: ${(props) => theme.borderRadius[props.borderRadius || "none"]};
  padding: ${(props) => props.padding};
  justify-content: center;
  font-family: Montserrat;
  align-content: center;
  height: fit-content;
  cursor: pointer;
  flex-wrap: wrap;
  color: #fafafa;
  display: flex;
  border: none;
`;