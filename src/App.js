import { Fragment } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import GlobalStyle from "./common/styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <section className="section">
        <div className="container">
          <Header />
          <Counter />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
