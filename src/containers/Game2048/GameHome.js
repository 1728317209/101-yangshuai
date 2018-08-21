import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScoreArea from '../../components/game2048/scoreArea/scoreArea';
import GameArea from '../../components/game2048/gameArea/gameArea';
import GameEnd from '../../components/game2048/gameEnd/gameEnd';
import * as HandleActions from '../../actions/index';
import './index.css';

const GameHome = ({
  Actions, bestScore, currentScore, gameGrid, flag, isOver, isWin, addScore
}) => (
  <div className="gameHome" id="gameHome">
    <GameEnd
      isOver={isOver}
      isWin={isWin}
    />
    <ScoreArea
      Actions={Actions}
      bestScore={bestScore}
      currentScore={currentScore}
      addScore={addScore}
    />
    <GameArea
      Actions={Actions}
      gameGrid={gameGrid}
      flag={flag}
    />
  </div>
);

function mapStateToProps(state) {
  const {
    bestScore,
    currentScore,
    gameGrid,
    flag,
    isOver,
    isWin,
    addScore
  } = state;
  return {
    bestScore,
    currentScore,
    gameGrid,
    flag,
    isOver,
    isWin,
    addScore
  };
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(HandleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameHome);
