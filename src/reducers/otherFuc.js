export function getLockedGridIds(gameGrid) {
  const lockedGrids = [];
  for (let i = 0; i < gameGrid.length; i++) {
    for (let j = 0; j < gameGrid[i].length; j++) {
      if (!gameGrid[i][j]) {
        lockedGrids.push(i * 4 + j);
      }
    }
  }
  return lockedGrids;
}
export function getRandSeat() {
  const x = Math.floor(Math.random() * 4);
  const y = Math.floor(Math.random() * 4);
  const num = Math.ceil(Math.random() * 2) * 2;
  return { x, y, num };
}

export function isOver(arr) {
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

export function unLockGrid(obj) {
  let state = { ...obj };
  let { lockedGridNum } = state;
  const { gameGrid, flag } = state;
  let times = 0;
  while (times < 3) {
    const seat = getRandSeat();
    if (lockedGridNum && !gameGrid[seat.x][seat.y]) {
      gameGrid[seat.x][seat.y] = seat.num;
      flag[seat.x][seat.y] = 1;
      lockedGridNum--;
      break;
    }
    times++;
  }
  // 优化随机产生位置
  if (times === 3) {
    const lockedGrids = getLockedGridIds(gameGrid);
    const index = Math.floor(Math.random() * lockedGrids.length);
    const x = parseInt(lockedGrids[index] / 4, 10);
    const y = lockedGrids[index] - x * 4;
    gameGrid[x][y] = Math.ceil(Math.random() * 2) * 2;
    flag[x][y] = 1;
    lockedGridNum--;
  }
  state = {
    ...state, lockedGridNum, gameGrid, flag
  };
  return state;
}

export function upDateGrid(obj) {
  let state = { ...obj };
  let {
    currentScore, isUpdate, isWin, lockedGridNum, addScore
  } = state;
  const {
    bestScore, isOver, gameGrid, flag
  } = state;
  for (let i = 0; i < 4; i++) {
    const tempArray = [];
    // const tempFlagArray = [];
    // 把一行中非零元素放到左边
    for (let j = gameGrid[i].length - 1; j >= 0; j--) {
      if (!gameGrid[i][j]) {
        tempArray.push(0);
        flag[i].push(0);
      } else {
        tempArray.unshift(gameGrid[i][j]);
        flag[i].unshift(flag[i][j]);
      }
    }
    // 相同元素相加
    for (let j = 0; j < tempArray.length; j++) {
      if (tempArray[j] === tempArray[j + 1] && tempArray[j]) {
        tempArray[j] *= 2;
        flag[i][j] = 2;
        if (tempArray[j] === 2048) {
          isWin = true;
        }
        currentScore += tempArray[j];
        addScore += tempArray[j];
        lockedGridNum++;
        tempArray.splice(j + 1, 1);
        tempArray.push(0);
        flag[i].splice(j + 1, 1);
        flag[i].push(0);
        // j = -1;
      }
    }
    // 判断是否更新
    if (JSON.stringify(tempArray) !== JSON.stringify(gameGrid[i])) {
      isUpdate = true;
      gameGrid[i] = tempArray;
    }
  }
  state = {
    ...state, currentScore, bestScore, isUpdate, isOver, isWin, lockedGridNum, addScore, gameGrid, flag
  };
  return state;
}

export function getNewGrid() {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
}

