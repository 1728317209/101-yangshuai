import React from 'react';
import './index.css';

// 出现和合并动画，如果前后两次的className相同，则没有动画效果
// 所以，定义两个flag，每次渲染前取反，拼接到className上
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

  componentDidMount() {
    const { Actions } = this.props;
    window.addEventListener('keydown', this.onKeyDown);
    Actions.restart();
  }

  onKeyDown = e => {
    const { Actions } = this.props;
    // 不同方向 Actions.moveGrid()携带不同参数
    switch (e.keyCode) {
      case 38:
      case 87:
        e.preventDefault();
        Actions.moveGrid(2); // 向上2
        break;
      case 40:
      case 83:
        e.preventDefault();
        Actions.moveGrid(3); // 向下3
        break;
      case 37:
      case 65:
        e.preventDefault();
        Actions.moveGrid(0);// 向左0
        break;
      case 39:
      case 68:
        e.preventDefault();
        Actions.moveGrid(1); // 向右1
        break;
      default:
        break;
    }
  }

  onTouchStart = e => {
    this.setState({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    });
  }

  onTouchEnd = e => {
    const { Actions } = this.props;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const moveX = endX - this.state.startX;
    const moveY = endY - this.state.startY;
    // 误触处理
    const divX = e.changedTouches[0].target.clientWidth;
    const divY = e.changedTouches[0].target.clientHeight;
    if (Math.abs(moveX) < 0.1 * divX || Math.abs(moveY) < 0.1 * divY) {
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

  renderGameGrid = (gameGrid, flag) => gameGrid.map((lineItem, lineIdx) => lineItem.map((item, idx) => {
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
  }));

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
