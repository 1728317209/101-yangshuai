import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScoreArea from '../../components/game2048/scoreArea/scoreArea';
import GameArea from '../../components/game2048/gameArea/gameArea';
import * as HandleActions from '../../actions/index';
import './index.css';

const GameHome = ({
  isUpdate,
  Actions,
  bestScore,
  currentScore,
  gameGrid,
  flag,
  isOver,
  isWin,
  addScore
}) => {
  if (isOver) {
    alert('Game Over!');
  }
  if (isWin) {
    setTimeout(() => { alert('Congratulations'); }, 1500);
  }
  return (
    <div className="gameHome" id="gameHome">
      <ScoreArea
        Actions={Actions}
        bestScore={bestScore}
        currentScore={currentScore}
        addScore={addScore}
      />
      <GameArea
        Actions={Actions}
        isUpdate={isUpdate}
        bestScore={bestScore}
        currentScore={currentScore}
        gameGrid={gameGrid}
        flag={flag}
        isWin={isWin}
      />
    </div>
  );
};

function mapStateToProps(state) {
  const {
    isOver,
    isUpdate,
    bestScore,
    currentScore,
    gameGrid,
    flag,
    isWin,
    addScore
  } = state;
  return {
    bestScore,
    currentScore,
    gameGrid,
    flag,
    isOver,
    isUpdate,
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
