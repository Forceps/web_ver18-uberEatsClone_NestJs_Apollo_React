import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./GlobalLib/Styles/styles.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./GlobalLib/Apollo/Settings/ApolloConnection";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./Routers/app";
import { StrictMode } from "react";

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
