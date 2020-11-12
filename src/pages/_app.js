import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withData from "util/Apollo";
import "styles/globals.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

// Wraps all components in the tree with the data provider
// export default withData(MyApp, { getDataFromTree });

export default MyApp;
