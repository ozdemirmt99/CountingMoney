import { InputNumber,Space } from "antd";
import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

class Counter extends Component {
  state = {
    number: 0,
  };

  onChangeNumberInput = (e) => {
    this.props.onChangeTotal(this.props.type, e);
  };



  render() {
    console.log(this.props.values[this.props.type]);
    return (
      <div>
        <Space>
          <Col>
            <Col >
              {console.log(this.props.images)}
              <img src={this.props.images} alt={this.props.type} className="images" />
            </Col>
            <Col>
              <InputNumber
                onChange={this.onChangeNumberInput}
                value={this.props.values[this.props.type]}
                min={0}
              />
            </Col>
          </Col>
        </Space>
      </div>
    );
  }
}

export default Counter;
