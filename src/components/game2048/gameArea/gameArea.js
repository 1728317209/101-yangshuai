import React from 'react';
import './index.css';

export default class GameArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startX: null,
      startY: null
    };
  }

  componentWillMount() {
    const { Actions } = this.props;
    console.log('Game 2048');
    window.addEventListener('keydown', this.onKeyDown);
    Actions.restart();
  }

  componentWillUpdate() {
    console.log('will updata');
  }

  onKeyDown = e => {
    const { Actions } = this.props;
    switch (e.keyCode) {
      case 38:
      case 87:
        console.log('上');
        Actions.moveGrid(2); // 2
        break;
      case 40:
      case 83:
        console.log('下');
        Actions.moveGrid(3); // 3
        break;
      case 37:
      case 65:
        console.log('左');
        Actions.moveGrid(0);// 0
        break;
      case 39:
      case 68:
        console.log('右');
        Actions.moveGrid(1); // 1
        break;
      default:
        break;
    }
  }

  onTouchStart = e => {
    console.log('start');
    console.log(e.touches[0].clientX);
    console.log(e.touches[0].clientY);
    this.setState({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    });
  }

  onTouchMove = e => {
    console.log('moving');
    console.log(e.touches[0].clientX);
    console.log(e.touches[0].clientY);
  }

  onTouchEnd = e => {
    const { Actions } = this.props;
    console.log('end');
    console.log(e.changedTouches[0].clientX);
    console.log(e.changedTouches[0].clientY);
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const moveX = endX - this.state.startX;
    const moveY = endY - this.state.startY;
    console.log(moveX);
    console.log(moveY);
    if (Math.abs(moveX) > Math.abs(moveY)) {
      if (moveX > 0) {
        console.log('向右');
        Actions.moveGrid(1);// 向右
      } else {
        console.log('向左');
        Actions.moveGrid(0);// 向左
      }
    } else if (Math.abs(moveX) <= Math.abs(moveY)) {
      if (moveY < 0) {
        console.log('向上');
        Actions.moveGrid(2);// 向上
      } else {
        console.log('向下');
        Actions.moveGrid(3);// 向下
      }
    }
  }

  getGridItemClass = num => {
    const className = `gameItem Num${num}`;
    return className;
  }

  renderGameGrid = gameGrid => gameGrid.map((lineItem, lineIdx) => lineItem.map((item, idx) => {
    if (item) {
      return <div key={`${lineIdx}-${idx}`} className={this.getGridItemClass(item)}>{item}</div>;
    }
    return <div key={`${lineIdx}-${idx}`} className="gameItem" />;
  }));

  render() {
    const { gameGrid } = this.props;
    return (
      <div className="GameArea" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} >
        {
          this.renderGameGrid(gameGrid)
        }
      </div>
    );
  }
}
