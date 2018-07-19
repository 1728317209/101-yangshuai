import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {

    handleClose = () => {
        this.props.onCloseClick(false);
    }


    render() {
        console.log('component render');
        const { isActive } = this.props;


        if (!isActive) {
            return null;
        }
        return (
            <div className="mask-ctn">
                <div className="close-btn" onClick={this.handleClose}>close</div>
                <div className="dialog-ctn">
                    <input type="text" value="title" />
                    <input type="text" value="descript" />
                    <input type="text" value="time" />
                    <input type="button" value="添加" onClick={this.props.handleAddItems} />

                </div>
            </div>
        );
    }
}

