import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/global";

import { useTheme } from "./providers/theme";

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}
