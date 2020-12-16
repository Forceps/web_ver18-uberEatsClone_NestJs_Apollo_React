import React from "react";
import Router from "./Router";
import "../../GlobalLib/Styles/GlobalStyle/GlobalStyles.scss";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ContextProvider
        contexts={[]} //위에 배치될수록 더 하위의 컴포넌트가 된다.
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};
