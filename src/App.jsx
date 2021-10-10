import React from "react";
import { Component } from "react";
import "./App.css";
import "tachyons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angka: 0,
    };
  }

  render() {
    const addNumber = () => {
      this.setState({ angka: this.state.angka + 1 });
    };
    const minusNumber = () => {
      this.setState({ angka: this.state.angka - 1 });
    };
    return (
      <div className="text-center container-outside">
        <h1 className="mb-3 title">
          Welcome To Reacounter <i class="bi bi-calculator"></i>
        </h1>
        <div className="container wrapper border-3">
          <div className="row justify-content-center">
            <div className="col-sm-4 ">
              <div className="border-3 rounded counter">
                <button id="increment" className="btn grow tombol" onClick={addNumber}>
                  <h2>
                    <i className="bi bi-plus-lg"></i>
                  </h2>
                </button>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="number-container">
                <h1>{this.state.angka}</h1>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border-3 rounded counter">
                <button id="decrement" className="btn grow tombol" onClick={minusNumber}>
                  <h2>
                    <i className="bi bi-dash-lg"></i>
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
