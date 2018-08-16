import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScoreArea from '../../components/game2048/scoreArea/scoreArea';
import GameArea from '../../components/game2048/gameArea/gameArea';
import * as HandleActions from '../../actions/index';
import './index.css';

class GameHome extends React.Component {
  componentWillMount() {
    // 对下面数组进行转置(即行列互换)
    const arr = [[2, 4, 6], [8, 9, 0], [9, 6, 2]];
    console.log('123', arr);
    this.transpose(arr, 0);
    this.transpose(arr, 1);
    this.transpose(arr, 2);
  }

  transpose = (arr, direction) => {
    const arr_new = [[], [], []];
    switch (direction) {
      case 0: { // 向右
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            arr_new[i][j] = arr[i][arr.length - j - 1];
          }
        }
        console.log('789', arr_new);
        break;
      }
      case 1: { // 向下
        for (let i = arr.length - 1; i >= 0; i--) {
          for (let j = 0; j < arr.length; j++) {
            arr_new[i][j] = arr[j][arr.length - i - 1];
          }
        }
        console.log(arr_new);
        break;
      }
      case 2: { // 向上
        console.log('2222222222222222222');
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            arr_new[i][j] = arr[arr.length - j - 1][i];
          }
        }
        console.log(arr_new);
        break;
      }
      default:
        break;
    }
  }
  render() {
    const { isUpdate, Actions, bestScore, currentScore, gameGrid, flag } = this.props;
    console.log(bestScore, currentScore, gameGrid);
    return (
      <div>
        <ScoreArea bestScore={bestScore} currentScore={currentScore} />
        <GameArea Actions={Actions} isUpdate={isUpdate} bestScore={bestScore} currentScore={currentScore} gameGrid={gameGrid} flag={flag} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isUpdate, bestScore, currentScore, gameGrid, flag } = state;
  return {
    bestScore,
    currentScore,
    gameGrid,
    flag,
    isUpdate
  };
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(HandleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameHome);
