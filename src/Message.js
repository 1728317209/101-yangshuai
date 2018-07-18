import React, { Component } from 'react';
import logo from './logo.svg';


export default class Message extends Component {
    
    OnClickItem = () => {
        const {onclick, item} = this.props;
        if(onclick){
            onclick(item);
        }
    }
    

    render() {
        const {item} = this.props;
        return (
            <li onclick={this.onclick()}>
                <img src="./img/人.png" className="img-style" alt=""> {item.items_message[0].img} </img>
                <div>
                    <strong>{item.items_message[0].title}</strong>
                    <span className="time">{item.items_message[0].time}</span><br />
                    <span className="message">{item.items_message[0].decription}</span>
                </div>
            </li>

        );
    }
}