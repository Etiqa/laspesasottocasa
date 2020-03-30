import React from "react";
import BootstrapProvider from "@bootstrap-styled/provider";
import { Container } from "@bootstrap-styled/v4";

import ShopList from "./containers/ShopList";

const myTheme = {
  "$btn-primary-bg": "blue",
  "$btn-primary-color": "white",
};

function App() {
  return (
    <BootstrapProvider theme={myTheme}>
      <Container className="py-2">
        <div className="App">
          <header className="App-header"></header>
          <ShopList />
        </div>
      </Container>
    </BootstrapProvider>
  );
}

export default App;
