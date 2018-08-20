import React from 'react';
import './index.css';

let appearedFlag = false;
let mergeFlag = false;

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

  onKeyDown = e => {
    const { Actions } = this.props;
    switch (e.keyCode) {
      case 38:
      case 87:
        e.preventDefault();
        console.log('上');
        Actions.moveGrid(2); // 2
        break;
      case 40:
      case 83:
        e.preventDefault();
        console.log('下');
        Actions.moveGrid(3); // 3
        break;
      case 37:
      case 65:
        e.preventDefault();
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
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const moveX = endX - this.state.startX;
    const moveY = endY - this.state.startY;
    const divX = e.changedTouches[0].target.clientWidth;
    const divY = e.changedTouches[0].target.clientHeight;
    if (Math.abs(moveX) < 0.3 * divX && Math.abs(moveY) < 0.3 * divY) {
      return null;
    } else if (Math.abs(moveX) > Math.abs(moveY)) {
      if (moveX > 0) {
        Actions.moveGrid(1);// 向右
      } else {
        Actions.moveGrid(0);// 向左
      }
    } else if (Math.abs(moveX) <= Math.abs(moveY)) {
      if (moveY < 0) {
        Actions.moveGrid(2);// 向上
      } else {
        Actions.moveGrid(3);// 向下
      }
    }
    return null;
  }

  getGridItemClass = num => {
    const className = `gameItem Num${num} appeared`;
    return className;
  }

  renderGameGrid = (gameGrid, flag) => gameGrid.map((lineItem, lineIdx) => {
    return lineItem.map((item, idx) => {
      if (item) {
        if (flag[lineIdx][idx] === 1) {
          appearedFlag = !appearedFlag;
          return <div key={`${lineIdx}-${idx}`} className={`gameItem Num${item} appeared-${appearedFlag}`}>{item}</div>;
        } else if (flag[lineIdx][idx] === 2) {
          mergeFlag = !mergeFlag;
          return <div key={`${lineIdx}-${idx}`} className={`gameItem Num${item} merge-${mergeFlag}`}>{item}</div>;
        }
        return <div key={`${lineIdx}-${idx}`} className={`gameItem Num${item}`}>{item}</div>;
      }
      return <div key={`${lineIdx}-${idx}`} className="gameItem" />;
    });
  });

  render() {
    const { gameGrid, flag } = this.props;
    return (
      <div className="GameArea" id="GameArea" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} >
        {
          this.renderGameGrid(gameGrid, flag)
        }
      </div>
    );
  }
}
