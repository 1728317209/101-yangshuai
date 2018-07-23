import React, { Component } from 'react';
import MulSelect from './MulSelect'

export default class MessageItem extends Component {

  ShowDialog_C = () => {
    const {index} = this.props;
    this.props.ShowDialog_C(2, index);
  }

  getIndexs = (e) => {
    const {index} = this.props;
    this.props.handleGetIndexs(index, e.target.checked)
  }


  render(){
    const { item, isMulSelect, index} = this.props;
    return <MulSelect 
      item={item} 
      isMulSelect={isMulSelect} 
      index={index} 
      ShowDialog_C={this.ShowDialog_C} 
      getIndexs={this.getIndexs}
      />
  }
}

