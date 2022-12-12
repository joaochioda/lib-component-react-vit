import styled from "styled-components";
import { ThemeProps } from "../../../styles/globalStyles";

export const Button = styled.button`
  width: 100%;
  height: 3.1875rem;
  background: ${(props: ThemeProps) => props.theme.color.green[400]};
  border: none;

  font-weight: ${(props: ThemeProps) => props.theme.weight.bold};
  color: ${(props: ThemeProps) => props.theme.color.white[900]};
  font-size: ${(props: ThemeProps) => props.theme.size.s};

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  transition: filter 0.2s ease-in-out;
`;
