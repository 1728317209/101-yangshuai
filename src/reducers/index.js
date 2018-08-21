import * as ActionTypes from '../const/ActionTypes';
import { GameInfo } from './InitState';
import { transposeToLeft, transposeUndo } from './gridTranspose';
import { isOver, unLockGrid, upDateGrid, getNewGrid, getRandSeat } from './otherFuc';

export default function Game2048(state = GameInfo, action) {
  switch (action.type) {
    case ActionTypes.MOVE_GRID: {
      // 拷贝state 并初始化部分变量
      let newState = {
        ...state,
        addScore: 0,
        flag: getNewGrid(),
        isUpdate: false
      };
      // 操作数组之前 将原方向统一转置 向左
      newState.gameGrid = transposeToLeft(newState.gameGrid, action.direction);
      // 更新
      newState = upDateGrid(newState);
      // 如果更新
      if (newState.isUpdate) {
        // 解锁新的gameGrid
        newState = unLockGrid(newState);
        // 如果有加分
        if (newState.currentScore > newState.bestScore) {
          newState.bestScore = newState.currentScore;
        }
      }
      // 渲染之前 转置回原方向
      newState.gameGrid = transposeUndo(newState.gameGrid, action.direction);
      newState.flag = transposeUndo(newState.flag, action.direction);
      // lockedGridNum为0时 判断是否失败
      if (newState.lockedGridNum === 0) {
        // 如果失败
        if (isOver(newState.gameGrid)) {
          newState.isOver = true;
          return newState;
        }
      }
      return newState;
    }

    case ActionTypes.RESTART: {
      const newFlag = getNewGrid();
      const newNameGrid = getNewGrid();
      let isRestart = false;
      const seat1 = getRandSeat();
      newNameGrid[seat1.x][seat1.y] = seat1.num;
      newFlag[seat1.x][seat1.y] = 1;
      while (!isRestart) {
        const seat2 = getRandSeat();
        if (seat1.x !== seat2.x || seat1.y !== seat2.y) {
          newNameGrid[seat2.x][seat2.y] = seat2.num;
          newFlag[seat2.x][seat2.y] = 1;
          isRestart = true;
        }
      }
      return {
        ...state,
        gameGrid: newNameGrid,
        flag: newFlag,
        currentScore: 0,
        addScore: 0,
        lockedGridNum: 14,
        isUpdate: false,
        isOver: false,
        isWin: false
      };
    }
    default:
      return state;
  }
}

