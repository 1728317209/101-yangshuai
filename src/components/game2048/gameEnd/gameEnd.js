import React from 'react';
import './index.css';

export default class GameEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isActive: false
    };
  }

  renderMask = () => {
    const { isOver, isWin } = this.props;
    if (isOver) {
      return (
        <div className="mask">
          <div className="result">Game Over</div>
        </div>
      );
    } else if (isWin) {
      return (
        <div className="mask">
          <div className="result">You Win!</div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {
          this.renderMask()
        }
      </div>
    );
  }
}
