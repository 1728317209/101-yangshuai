import React from 'react';
import './index.css';

export default class GameArea extends React.Component {

  componentWillMount() {
    const { Actions } = this.props;
    console.log('Game 2048');
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('touchstart', this.onTouchStart);
    window.addEventListener('touchmove', this.onTouchMove);
    window.addEventListener('touchend', this.onTouchEnd);
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
        Actions.moveGridToLeft(2); // 2
        break;
      case 40:
      case 83:
        console.log('下');
        Actions.moveGridToLeft(3); // 3
        break;
      case 37:
      case 65:
        console.log('左');
        Actions.moveGridToLeft(0);// 0
        break;
      case 39:
      case 68:
        console.log('右');
        Actions.moveGridToLeft(1); // 1
        break;
      default:
        break;
    }
  }

  onTouchStart = e => {
    console.log('start');
    console.log(e.touches[0].clientX);
    console.log(e.touches[0].clientY);
  }

  onTouchMove = e => {
    console.log('moving');
    console.log(e.touches[0].clientX);
    console.log(e.touches[0].clientY);
  }

  onTouchEnd = e => {
    console.log('end');
    console.log(e.changedTouches[0].clientX);
    console.log(e.changedTouches[0].clientY);
  }

  getRandGridIdx = () => {
    return {
      x: Math.floor(Math.random() * 4),
      y: Math.floor(Math.random() * 4)
    };
  }

  setGameGrid = (x, y, value) => {
    const { Actions } = this.props;
    Actions.setGameGrid(x, y, value);
  }

  setFlag = (x, y, value) => {
    const { Actions } = this.props;
    Actions.setFlag(x, y, value);
  }

  getGridItemClass = num => {
    console.log(num);
    const className = `gameItem Num${num}`;
    return className;
  }

  renderGameGrid = gameGrid => {
    return gameGrid.map((lineItem, lineIdx) => lineItem.map((item, idx) => {
      if (item) {
        return <div key={`${lineIdx}-${idx}`} className={this.getGridItemClass(item)}>{item}</div>;
      }
      return <div key={`${lineIdx}-${idx}`} className="gameItem" />;
    }));
  }

  render() {
    const { gameGrid } = this.props;
    return (
      <div className="GameArea">
        {
          this.renderGameGrid(gameGrid)
        }
      </div>
    );
  }
}
