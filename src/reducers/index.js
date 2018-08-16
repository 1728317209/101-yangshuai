import * as ActionTypes from '../const/ActionTypes';
import { GameInfo } from './InitState';
import { transposeToLeft, transposeUndo } from './gridTranspose';

function isOver(arr) {
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i + 1 > 3 && j + 1 < 4) {
        if (arr[i][j] === arr[i][j + 1]) {
          flag = false;
          break;
        }
      } else if (j + 1 > 3 && i + 1 < 4) {
        if (arr[i][j] === arr[i + 1][j]) {
          flag = false;
          break;
        }
      } else if (i < 3 && j < 3) {
        if (arr[i][j] === arr[i][j + 1] || arr[i][j] === arr[i + 1][j]) {
          flag = false;
          break;
        }
      }
    }
    if (!flag) {
      break;
    }
  }
  return flag;
}

export default function Game2048(state = GameInfo, action) {
  switch (action.type) {
    case ActionTypes.SET_GAMEGRID: {
      const { gameGrid } = state;
      gameGrid[action.x][action.y] = action.value;
      return {
        ...state,
        gameGrid
      };
    }
    case ActionTypes.SET_FLAG: {
      const { flag } = state;
      flag[action.x][action.y] = action.value;
      return {
        ...state,
        flag
      };
    }
    case ActionTypes.MOVE_GRID_TO_LEFT: {
      const {
        gameGrid,
        flag,
        lockedGridNum,
        currentScore
      } = state;
      // 操作数组之前 将原方向统一转置 向左
      let newLockedGridNum = lockedGridNum;
      const newFlag = [...flag];
      let unLockFlag = false;
      let newIsUpdate = false;
      let score = currentScore;
      if (lockedGridNum === 0) {
        if (isOver(gameGrid)) {
          // alert('Game Over!');
          return {
            ...state,
            isOver: true,
            bestScore: currentScore
          };
        }
      }
      let newGameGrid = transposeToLeft(gameGrid, action.direction);
      for (let i = 0; i < 4; i++) {
        const tempArray = [];
        // 把一行中非零元素放到左边
        for (let j = newGameGrid[i].length - 1; j >= 0; j--) {
          if (!newGameGrid[i][j]) {
            tempArray.push(0);
          } else {
            tempArray.unshift(newGameGrid[i][j]);
          }
        }
        // 相同元素相加
        for (let j = 0; j < tempArray.length; j++) {
          if (tempArray[j] === tempArray[j + 1] && tempArray[j]) {
            tempArray[j] *= 2;
            score += tempArray[j];
            newLockedGridNum++;
            tempArray.splice(j + 1, 1);
            tempArray.push(0);
            // j = -1;
          }
        }
        // 判断是否更新
        if (JSON.stringify(tempArray) !== JSON.stringify(newGameGrid[i])) {
          newIsUpdate = true;
          newGameGrid[i] = tempArray;
        }
      }
      if (newIsUpdate) {
        // 如果更新 解锁新的gameGrid
        while (!unLockFlag) {
          const x = Math.floor(Math.random() * 4);
          const y = Math.floor(Math.random() * 4);
          const randNum = Math.ceil(Math.random() * 2) * 2;
          if (newLockedGridNum && !newGameGrid[x][y]) {
            newGameGrid[x][y] = randNum;
            flag[x][y] = 1;
            newLockedGridNum--;
            unLockFlag = true;
          }
        }
        // 渲染之前 转置回原方向
        newGameGrid = transposeUndo(newGameGrid, action.direction);
        return {
          ...state,
          gameGrid: newGameGrid,
          flag: newFlag,
          isUpdate: newIsUpdate,
          lockedGridNum: newLockedGridNum,
          currentScore: score
        };
      }
      return state;
    }
    case ActionTypes.RESTART: {
      const { lockedGridNum } = state;
      let flag = false;
      const newNameGrid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      let newLockedGridNum = lockedGridNum;
      while (!flag) {
        const x1 = Math.floor(Math.random() * 4);
        const y1 = Math.floor(Math.random() * 4);
        const randNum1 = Math.ceil(Math.random() * 2) * 2;
        const x2 = Math.floor(Math.random() * 4);
        const y2 = Math.floor(Math.random() * 4);
        const randNum2 = Math.ceil(Math.random() * 2) * 2;
        if (x1 !== x2 || y1 !== y2) {
          newNameGrid[x1][y1] = randNum1;
          newNameGrid[x2][y2] = randNum2;
          newLockedGridNum -= 2;
          flag = true;
        }
      }
      return {
        ...state,
        currentScore: 0,
        isUpdate: false,
        lockedGridNum: newLockedGridNum,
        gameGrid: newNameGrid
      };
    }
    default:
      return state;
  }
}

