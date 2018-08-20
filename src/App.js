import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="app-div">
        {this.props.children}
      </div>
    );
  }
}
