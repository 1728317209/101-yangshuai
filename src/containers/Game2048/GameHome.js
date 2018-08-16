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
      isOver
    } = this.props;
    if (isOver) {
      alert('Game Over!');
    }
    return (
      <div className="gameHome">
        <ScoreArea
          Actions={Actions}
          bestScore={bestScore}
          currentScore={currentScore}
        />
        <GameArea
          Actions={Actions}
          isUpdate={isUpdate}
          bestScore={bestScore}
          currentScore={currentScore}
          gameGrid={gameGrid}
          flag={flag}
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
    flag
  } = state;
  return {
    bestScore,
    currentScore,
    gameGrid,
    flag,
    isOver,
    isUpdate
  };
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(HandleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameHome);
