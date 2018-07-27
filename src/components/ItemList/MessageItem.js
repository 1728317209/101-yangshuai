import React, { Component } from 'react';
import MulSelect from './MulSelect'
import DialogViewD from './DialogView_D'
import '../DialogView.css'

export default class MessageItem extends Component {

  render() {
    const { handleFunctions, state } = this.props;
    return (
      <div>
        <DialogViewD
          state={state}
          handleFunctions={handleFunctions}
        />
        {
          state.HandleItem.messages.map((item, i) => {
          // state.messages.map((item, i) => {
            return (<MulSelect
              item={item}
              index={i}
              key={i}
              state={state}
              handleFunctions={handleFunctions}
              />
            )
          })
        }
      </div>
    );
  }
}

