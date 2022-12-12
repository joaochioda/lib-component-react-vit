import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from "../../../styles/globalStyles";
import { lightTheme } from "../../../styles/theme";
import { ThemeProvider } from "styled-components";
import * as S from "./Style";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={lightTheme()}>
        <GlobalStyles />
  <S.Button onClick={onClick}>{label}</S.Button>;
  </ThemeProvider>
  </ChakraProvider>
    )
}

export default Button;
