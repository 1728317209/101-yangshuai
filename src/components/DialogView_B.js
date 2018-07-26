import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      descript: "",
      time: ""
    }
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescript = this.onChangeDescript.bind(this);
    this.onChangetime = this.onChangetime.bind(this);
  }

  handleClose = () => {
    const { handleFunctions } = this.props;
    handleFunctions.ShowDialog(0);
  }
  

  onChangeTitle (e) {
    //e 包含了表单的所有属性
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescript (e) {
    this.setState({
      descript: e.target.value
    });
  }
  onChangetime (e) {
    this.setState({
      time: e.target.value
    });
  }

  handleAdd = () => {
    const { handleFunctions } = this.props;
    //校验 输入是否为空
    if (!this.state.title || !this.state.descript || !this.state.time) {
      alert("输入不能为空");
    }else {
      let obj = {
        "title": this.state.title, 
        "descript": this.state.descript, 
        "time": this.state.time
      }
      handleFunctions.addItem(obj);
      this.setState({
        title: '',
        descript: '',
        time: ''
      })
    }
  }


  render() {
    const { state } = this.props;
    if (state.isDialogActive !== 1) {
      return null;
    }
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.handleClose}>close</div>
        <div className="dialog-ctn">
          <form name="form1" className="dialog-form-ctn">
            <input type="text" className="input-text-ctn" placeholder="title" onChange={this.onChangeTitle} />
            <input type="text" className="input-text-ctn" placeholder="descript" onChange={this.onChangeDescript}/>
            <input type="text" className="input-text-ctn" placeholder="time" onChange={this.onChangetime}/>
            <input type="button" value="添加" onClick={this.handleAdd}/>
          </form>
        </div>
      </div>
    );
  }
}

