import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScoreArea from '../../components/game2048/scoreArea/scoreArea';
import GameArea from '../../components/game2048/gameArea/gameArea';
import * as HandleActions from '../../actions/index';
import './index.css';

class GameHome extends React.Component {
  componentWillMount() {
    console.log('Game Home');
  }

  render() {
    const {
      isUpdate,
      Actions,
      bestScore,
      currentScore,
      gameGrid,
      flag,
      isOver,
      isWin,
      addScore
    } = this.props;
    if (isOver) {
      alert('Game Over!');
    }
    if (isWin) {
      setTimeout(() => { alert('Congratulations'); }, 100);
      // Actions.restart();
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
  }
}

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
