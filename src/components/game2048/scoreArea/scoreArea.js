import React from 'react';
import Restart from './restart';
import './index.css';

// 加分动画部分，如果前后两次的className相同，则没有动画效果
// 所以，定义两个flag，每次渲染前取反，拼接到className上
let addScoreFlag = false;
let addBestScoreFlag = false;

export default class SorceArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderCurrentAddScore = () => {
    const { addScore } = this.props;
    if (addScore !== 0) {
      addScoreFlag = !addScoreFlag;
      return (
        <span id="addCurrnetScore" className={`addScore-${addScoreFlag}`}>{`+${addScore}`}</span>
      );
    }
    return null;
  }

  renderBestAddScore = () => {
    const { bestScore, currentScore, addScore } = this.props;
    if (currentScore >= bestScore && addScore !== 0) {
      addBestScoreFlag = !addBestScoreFlag;
      return (
        <span id="addBestScore" className={`addScore-${addBestScoreFlag}`} >{`+${addScore}`}</span>
      );
    }
    return null;
  }

  render() {
    const { currentScore, bestScore, Actions } = this.props;
    return (
      <div className="SorceArea">
        <div className="head">
          <h1 className="title-2048">2048</h1>
          <div className="score_container">
            <div className="curentSorce">
              {
                this.renderCurrentAddScore()
              }
              <span className="score-font">Sorces</span>
              <span>{currentScore}</span>
            </div>
            <div className="bestSorce">
              {
                this.renderBestAddScore()
              }
              <span className="score-font">Best Sorces</span>
              <span>{bestScore}</span>
            </div>
          </div>
        </div>
        <Restart Actions={Actions} />
      </div>
    );
  }
}
