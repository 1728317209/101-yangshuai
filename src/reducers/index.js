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
    case ActionTypes.MOVE_GRID_TO_LEFT: {
      const {
        gameGrid,
        lockedGridNum,
        currentScore,
        bestScore,
        isWin
      } = state;
      let newLockedGridNum = lockedGridNum;
      let newIsUpdate = false;
      let score = currentScore;
      let newBestScore = bestScore;
      let newIsWin = isWin;
      let newAddScore = 0;
      // 如果已经成功
      if (newIsWin) {
        return state;
      }
      if (score > newBestScore) {
        newBestScore = score;
      }
      // 如果失败
      if (lockedGridNum === 0) {
        if (isOver(gameGrid)) {
          return {
            ...state,
            isOver: true,
            bestScore: newBestScore,
            addScore: newAddScore
          };
        }
      }
      // 操作数组之前 将原方向统一转置 向左
      let newGameGrid = transposeToLeft(gameGrid, action.direction);
      let newFlag = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];// transposeToLeft(flag, action.direction);
      for (let i = 0; i < 4; i++) {
        const tempArray = [];
        // const tempFlagArray = [];
        // 把一行中非零元素放到左边
        for (let j = newGameGrid[i].length - 1; j >= 0; j--) {
          if (!newGameGrid[i][j]) {
            tempArray.push(0);
            newFlag[i].push(0);
          } else {
            tempArray.unshift(newGameGrid[i][j]);
            newFlag[i].unshift(newFlag[i][j]);
          }
        }
        // 相同元素相加
        for (let j = 0; j < tempArray.length; j++) {
          if (tempArray[j] === tempArray[j + 1] && tempArray[j]) {
            tempArray[j] *= 2;
            newFlag[i][j] = 2;
            if (tempArray[j] === 2048) {
              newIsWin = true;
            }
            score += tempArray[j];
            newAddScore += tempArray[j];
            newLockedGridNum++;
            tempArray.splice(j + 1, 1);
            tempArray.push(0);
            newFlag[i].splice(j + 1, 1);
            newFlag[i].push(0);
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
        let times = 0;
        const randNum = Math.ceil(Math.random() * 2) * 2;
        while (times < 50) {
          const x = Math.floor(Math.random() * 4);
          const y = Math.floor(Math.random() * 4);
          if (newLockedGridNum && !newGameGrid[x][y]) {
            newGameGrid[x][y] = randNum;
            newFlag[x][y] = 1;
            newLockedGridNum--;
            break;
          }
          times++;
        }
        // 优化 随机产生位置
        if (times === 50) {
          for (let i = 0; i < newGameGrid.length; i++) {
            for (let j = 0; j < newGameGrid[i].length; j++) {
              if (newGameGrid[i][j]) {
                newGameGrid[i][j] = randNum;
                newFlag[i][j] = 1;
                newLockedGridNum--;
              }
            }
          }
        }
        // 如果有加分
        if (score > newBestScore) {
          newBestScore = score;
        }
        // 渲染之前 转置回原方向
        newGameGrid = transposeUndo(newGameGrid, action.direction);
        newFlag = transposeUndo(newFlag, action.direction);
        return {
          ...state,
          gameGrid: newGameGrid,
          flag: newFlag,
          isUpdate: newIsUpdate,
          lockedGridNum: newLockedGridNum,
          currentScore: score,
          bestScore: newBestScore,
          isWin: newIsWin,
          addScore: newAddScore
        };
      }
      return state;
    }
    case ActionTypes.RESTART: {
      const newFlag = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      const newNameGrid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      let isRestart = false;
      while (!isRestart) {
        const x1 = Math.floor(Math.random() * 4);
        const y1 = Math.floor(Math.random() * 4);
        const randNum1 = Math.ceil(Math.random() * 2) * 2;
        const x2 = Math.floor(Math.random() * 4);
        const y2 = Math.floor(Math.random() * 4);
        const randNum2 = Math.ceil(Math.random() * 2) * 2;
        if (x1 !== x2 || y1 !== y2) {
          newNameGrid[x1][y1] = randNum1;
          newNameGrid[x2][y2] = randNum2;
          newFlag[x1][y1] = 1;
          newFlag[x2][y2] = 1;
          isRestart = true;
        }
      }
      return {
        ...state,
        currentScore: 0,
        isUpdate: false,
        lockedGridNum: 14,
        gameGrid: newNameGrid,
        isOver: false,
        isWin: false,
        flag: newFlag
      };
    }
    default:
      return state;
  }
}

