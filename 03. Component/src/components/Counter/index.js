import React, { Component } from 'react';

import Label from '../Label';
import Button from '../Button';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + (this.props.delta || 1),
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Label number={count} />
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default componentName;