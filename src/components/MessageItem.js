import React, { Component } from 'react';
import MulSelect from './MulSelect'
import DialogView_D from './DialogView_D'

export default class MessageItem extends Component {

  render() {
    const { handleFunctions, state } = this.props;
    return (
      <div>
        <DialogView_D
          state={state}
          handleFunctions={handleFunctions}
        />
        {
          state.messages.map((item, i) => {
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

