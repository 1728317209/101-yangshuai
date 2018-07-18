import React, { Component } from 'react';
import logo from './logo.svg';
import MessageView from "./Message.js"
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items_message: [
        { "img": "./source/人.png", "title": "昵称A", "decription": "这是第一个item", "time": "08:00" },
        { "img": "./source/人.png", "title": "昵称B", "decription": "这是第二个item", "time": "09:00" },
        { "img": "./source/人.png", "title": "昵称C", "decription": "这是第三个item", "time": "10:00" }
      ],
      footer_message: [
        { "img": "./source/消息.png", "title": "消息" },
        { "img": "./source/通讯录.png", "title": "通讯录" },
        { "img": "./source/发现.png", "title": "发现" },
        { "img": "./source/我.png", "title": "我" }
      ]
    }
  }


  Message_test = () =>{
    const info = this.state.items_message.map((item, index) => {
      return <MessageView items={item} keys={index} onclick={this.onClickItem}/>
    });
    return info;
  }

  render() {
    return (
      <div className="APP">
        <header className="header">
          <strong className="textmargin">微信</strong>
          <img src="./img/加号.png" className="img-style1" alt="" onclick="show_title()" />
        </header>

        <div>
          {this.Message_test()}
        </div>

        <footer className="footer-style">
          <ul>
            <li>
              <div><img src="./img/消息.png" alt="" /></div>
              微信
            </li>
            <li>
              <div><img src="./img/通讯录.png" alt="" /></div>
              通讯录
            </li>
            <li>
              <div><img src="./img/发现.png" alt="" /></div>
              发现
            </li>
            <li>
              <div><img src="./img/我.png" alt="" /></div>
              我
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;

