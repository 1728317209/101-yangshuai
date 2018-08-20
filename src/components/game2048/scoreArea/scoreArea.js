import React from 'react';
import './index.css';

let addScoreFlag = false;
let addBestScoreFlag = false;

export default class SorceArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleRestart = () => {
    const { Actions } = this.props;
    Actions.restart();
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

  renderBestScore = () => {
    const { bestScore, currentScore } = this.props;
    if (currentScore > bestScore) {
      return <span>{currentScore}</span>;
    }
    return <span>{bestScore}</span>;
  }
  render() {
    const { currentScore } = this.props;
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
              {
                this.renderBestScore()
              }
            </div>
          </div>
        </div>
        <div className="game_infro">
          <div className="game_intro">
            <span>Keypressing W S A D on PC.</span>
            <span>Touch moving on Phone.</span>
            <span>Join it & have fun!</span>
          </div>
          <div className="game_restart">
            <div className="game_restart_btn" onClick={this.handleRestart}>Restart</div>
          </div>
        </div>
      </div>
    );
  }
}
