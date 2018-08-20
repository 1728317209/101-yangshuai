export const other = {
  other: null
};

export const GameInfo = {
  currentScore: 0,
  bestScore: 0,
  isUpdate: false,
  isOver: false,
  isWin: false,
  lockedGridNum: 16,
  addScore: 0,
  gameGrid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  // 1刚解锁的、2合并的
  // 0包括未解锁的和没有变化的
  flag: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};

