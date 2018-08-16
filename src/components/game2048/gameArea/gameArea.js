import React from 'react';
import './index.css';

export default class GameArea extends React.Component {
  state = {
    // index: {
    //   x: null,
    //   y: null
    // }
  }

  componentWillMount() {
    const { Actions, isUpdate } = this.props;
    console.log('Game 2048');
    console.log(isUpdate);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('touchstart', this.onTouchStart);
    window.addEventListener('touchmove', this.onTouchMove);
    window.addEventListener('touchend', this.onTouchEnd);
    Actions.unLockNewGrid();
    Actions.unLockNewGrid();
  }

  componentWillUpdate() {
    console.log('will updata');
    // const { Actions, isUpdate } = this.props;
    // if (isUpdate) {
    //   Actions.unLockNewGrid();
    // }
  }

  onKeyDown = e => {
    const { Actions, isUpdate } = this.props;
    switch (e.keyCode) {
      case 38:
      case 87:
        console.log('上');
        break;
      case 40:
      case 83:
        console.log('下');
        break;
      case 37:
      case 65:
        console.log('左');
        Actions.moveGridToLeft();
        console.log('...', isUpdate);
        // if (isUpdate) {
        //   Actions.unLockNewGrid();
        // }
        break;
      case 39:
      case 68:
        console.log('右');
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

  renderGameGrid = gameGrid => {
    return gameGrid.map((lineItem, lineIdx) => lineItem.map((item, idx) => {
      if (item) {
        return <div key={`${lineIdx}-${idx}`} className="gameItem">{item}</div>;
      }
      return <div key={`${lineIdx}-${idx}`} className="gameItem" />;
    }));
  }

  render() {
    console.log('render');
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
