import React, { Fragment } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import TextInvite from "./components/TextInvite";
import Date from "./components/Date";
import GlobalStyle from "./common/styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <section className="section">
        <div className="container">
          <Header />
          <Counter />
          <TextInvite />
          <Date />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
