import React from 'react';
import './index.css';

export default class SorceArea extends React.Component {
  componentDidMount() {
    console.log('Game 2048');
  }

  handleRestart = () => {
    const { Actions } = this.props;
    Actions.restart();
  }

  render() {
    const { bestScore, currentScore } = this.props;
    if (currentScore === 2048) {
      alert('Congratulations, You Win!');
    }
    return (
      <div className="SorceArea">
        <div className="head">
          <h1 className="title-2048">2048</h1>
          <div className="score_container">
            <div className="curentSorce">
              <span className="score-font">Sorces</span>
              <span>{currentScore}</span>
            </div>
            <div className="bestSorce">
              <span className="score-font">Best Sorces</span>
              <span>{bestScore}</span>
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
