import * as ActionTypes from '../const/ActionTypes';
import { GameInfo } from './InitState';

function transpose (arr, direction) {
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
      const { gameGrid, flag } = state;
      const newGameGrid = [...gameGrid];
      const newFlag = [...flag];
      let newIsUpdate = false;
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
        console.log('....................', i, tempArray);
        // 相同元素相加
        for (let j = 0; j < tempArray.length; j++) {
          if (tempArray[j] === tempArray[j + 1] && tempArray[j]) {
            tempArray[j] *= 2;
            tempArray.splice(j + 1, 1);
            tempArray.push(0);
            j = -1;
          }
        }
        console.log('....................', i, tempArray);
        console.log('*********************', newGameGrid[i]);
        if (JSON.stringify(tempArray) !== JSON.stringify(newGameGrid[i])) {
          newIsUpdate = true;
          newGameGrid[i] = tempArray;
        }
      }
      if (newIsUpdate) {
        while (1) {
          const x = Math.floor(Math.random() * 4);
          const y = Math.floor(Math.random() * 4);
          const randNum = Math.ceil(Math.random() * 2) * 2;
          if (!newGameGrid[x][y]) {
            newGameGrid[x][y] = randNum;
            flag[x][y] = 1;
            break;
          }
        }
        return {
          ...state,
          gameGrid: newGameGrid,
          flag: newFlag,
          isUpdate: newIsUpdate
        };
      }
      return state;
    }
    case ActionTypes.UNLOCK_NEW_GRID: {
      const { gameGrid, flag } = state;
      while (1) {
        const x = Math.floor(Math.random() * 4);
        const y = Math.floor(Math.random() * 4);
        const randNum = Math.ceil(Math.random() * 2) * 2;
        if (!gameGrid[x][y]) {
          gameGrid[x][y] = randNum;
          flag[x][y] = 1;
          break;
        }
      }
      return {
        ...state,
        gameGrid,
        flag
      };
    }
    default:
      return state;
  }
}

