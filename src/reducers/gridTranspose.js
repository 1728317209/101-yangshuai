export function transposeToLeft(arr, direction) {
  const arr_new = [[], [], [], []];
  switch (direction) {
    case 0: { // 向左
      return [...arr];
    }
    case 1: { // 向右 --> 向左
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          arr_new[i][j] = arr[i][arr.length - j - 1];
        }
      }
      console.log('789', arr_new);
      return arr_new;
    }
    case 2: { // 向上 --> 向左
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          arr_new[arr.length - j - 1][i] = arr[i][j];
        }
      }
      console.log(arr_new);
      return arr_new;
    }
    case 3: { // 向下 --> 向左
      for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr.length; j++) {
          arr_new[j][arr.length - i - 1] = arr[i][j];
        }
      }
      console.log(arr_new);
      return arr_new;
    }
    default:
      return arr;
  }
}

export function transposeUndo(arr, direction) {
  const arr_new = [[], [], [], []];
  switch (direction) {
    case 0: { // 向左
      return [...arr];
    }
    case 1: { // 向左 --> 向右
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          arr_new[i][j] = arr[i][arr.length - j - 1];
        }
      }
      return arr_new;
    }
    case 2: { // 向上 --> 向左
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          arr_new[i][j] = arr[arr.length - j - 1][i];
        }
      }
      return arr_new;
    }
    case 3: { // 向下 --> 向左
      for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr.length; j++) {
          arr_new[i][j] = arr[j][arr.length - i - 1];
        }
      }
      console.log(arr_new);
      return arr_new;
    }
    default:
      return arr;
  }
}
