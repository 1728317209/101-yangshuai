import * as ActionTypes from '../const/ActionTypes';

export function add() {
  return {
    type: ActionTypes.ADD
  };
}

export function remove() {
  return {
    type: ActionTypes.REMOVE
  };
}

export function setGameGrid(x, y, value) {
  return {
    type: ActionTypes.SET_GAMEGRID,
    x,
    y,
    value
  };
}

export function setFlag(x, y, value) {
  return {
    type: ActionTypes.SET_FLAG,
    x,
    y,
    value
  };
}

export function unLockNewGrid() {
  return {
    type: ActionTypes.UNLOCK_NEW_GRID
  };
}

export function moveGridToLeft(direction) {
  return {
    type: ActionTypes.MOVE_GRID_TO_LEFT,
    direction
  };
}

export function isOver() {
  return {
    type: ActionTypes.IS_OVER
  };
}

export function restart() {
  return {
    type: ActionTypes.RESTART
  };
}
