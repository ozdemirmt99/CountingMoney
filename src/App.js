import React, { Component } from "react";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <div className="main__wrap">
        <main className="container"><h1
        style={{textAlign:"center"}}>How Much Money You Have</h1>
          <div className="card__box">
            <Counters />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
