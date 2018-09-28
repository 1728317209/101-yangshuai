import * as ActionTypes from '../const/ActionTypes';

// derection为移动方向，共有0、1、2、3四个取值
// 通过不同方向传入不同参数实现一个action控制四个方向的移动
export function moveGrid(direction) {
  return {
    type: ActionTypes.MOVE_GRID,
    // type: ActionTypes.MOVE_GRID,
    direction
  };
}
// export function moveGrid(direction) {
//   return {
//     type: ActionTypes.MOVE_GRID,
//     direction
//   };
// }

export function restart() {
  return {
    type: ActionTypes.RESTART
  };
}
