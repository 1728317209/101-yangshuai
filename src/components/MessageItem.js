import React, { Component } from 'react';
import MulSelect from './MulSelect'
import DialogView_D from './DialogView_D'

export default class MessageItem extends Component {

  render() {
    const { messages, isMulSelect, index, delItems } = this.props;
    return (
      <div>
        <DialogView_D
          isMulSelect={this.props.isMulSelect}
          delItems={this.props.delItems}
        />
        {
          messages.map((item, i) => {
            return (<MulSelect
              item={item}
              isMulSelect={isMulSelect}
              index={i}
              key={i}
              ShowDialog_C={this.props.ShowDialog_C}
              getIndexs={this.props.handleGetIndexs}
              delItems={delItems}
              />
            )
          })
        }
      </div>
    );
  }
}

