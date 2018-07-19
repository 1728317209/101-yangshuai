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


  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleClose = () => {
    this.props.onCloseClick(false);
  }
  

  onChangeTitle (e) {
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
    const obj = {"title":this.state.title, "descript":this.state.descript, "time":this.state.time}
    this.props.handleAddItem(obj);
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
          <form name="form1">
            <input type="text" name="title" placeholder="title" ref="title" onChange={this.onChangeTitle} />
            <input type="text" name="descript" placeholder="descript" ref="descript" onChange={this.onChangeDescript}/>
            <input type="text" name="time" placeholder="time" ref="time" onChange={this.onChangetime}/>
            <input type="button" value="添加" onClick={this.handleAdd}/>
          </form>
        </div>
      </div>
    );
  }
}

