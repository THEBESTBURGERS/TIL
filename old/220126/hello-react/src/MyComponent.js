import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name : '기본 이름'
  }
  static propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>안녕하세요, 제 이름은 {this.props.name} 입니다. </p>
        <p>저는 {this.props.age} 살 입니다.</p>
      </div>
    );
  }
}

export default MyComponent;