import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class LinkItem extends Component {
  handleRemove(index){
    this.props.onRemove(index);
  }

  render(){
    return (
      <div className="linkItem">
        <Row>
          <Col xs={6}>
            <p>
              {this.props.url}
            </p>
          </Col>

          <Col xs={6}>
            <a href={this.props.url} target="_blank">Visit link</a>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <a onClick={this.handleRemove.bind(this, this.props.index)}>Remove</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LinkItem;
