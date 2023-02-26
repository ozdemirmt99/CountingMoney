import React, { Component } from "react";
import Counter from "./counter";
import five from "../images/five.png";
import ten from "../images/ten.png";
import twenty from "../images/twenty.png";
import fifty from "../images/fifty.png";
import aHundred from "../images/aHundred.png";
import twoHundred from "../images/twoHundred.png";
import { BiRefresh } from "react-icons/bi";
import { Col, Row, } from 'antd';
class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      five: 0,
      ten: 0,
      twenty: 0,
      fifty: 0,
      hundred: 0,
      twoHundred: 0,
      counters: [
        { id: 1, value: 0, amaount: 0 },
        { id: 2, value: 0, amaount: 0 },
        { id: 3, value: 0, amaount: 0 },
        { id: 4, value: 0, amaount: 0 },
        { id: 5, value: 0, amaount: 0 },
        { id: 6, value: 0, amaount: 0 },
      ],
      total: 0
    };
  }

  onChangeTotal = (key, value) => {
    let newState = {...this.state}
    
    newState[key] = value
    newState["total"] = (newState["five"] * 5) + (newState["ten"] * 10) + (newState["twenty"] * 20) + (newState["fifty"] * 50) + (newState["hundred"] * 100) + (newState["twoHundred"] * 200)

    this.setState(newState)
    console.log("id yi yazıyorum"+this.state.counters[0].id)
    console.log("total: " + newState["total"])
  };

  render() {
    const images = [
      { id: 1, path: five, key: "five" },
      { id: 2, path: ten, key: "ten" },
      { id: 3, path: twenty, key: "twenty" },
      { id: 4, path: fifty, key: "fifty" },
      { id: 5, path: aHundred, key: "hundred" },
      { id: 6, path: twoHundred, key: "twoHundred" },
    ];

    return (
      <div>
        
       
        <Row>
        {this.state.counters.map((counter) => (
           <Col span={12}>
          <Counter
            key={counter.id}
            counter={counter}
            images={images[counter.id - 1].path}
            type={images[counter.id - 1].key}
            onChangeTotal={this.onChangeTotal}
            values={this.state}
          /></Col>
          
        ))}
        </Row>
        <div className="total-money">
          <h1>Total</h1>
          <h3>{this.state.total}</h3></div>
       
      </div>
    );
  }
}

export default Counters;
