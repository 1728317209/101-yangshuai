export const other = {
  other: null
};

export const GameInfo = {
  currentScore: 0, // 当前分数
  bestScore: 0, // 历史最高分数
  addScore: 0, // 本次操作加分
  lockedGridNum: 16, // 未解锁的方格数 (gameGrid中不为0的方格数)
  isUpdate: false,
  isOver: false,
  isWin: false,
  gameGrid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  // flag数组中
  // 1刚解锁的、2合并的
  // 0包括未解锁的和没有变化的
  flag: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};

