import React from 'react';
import './index.css';

export default class Restart extends React.Component {

  handleRestart = () => {
    const { Actions } = this.props;
    Actions.restart();
  }

  render() {
    return (
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
    );
  }
}
