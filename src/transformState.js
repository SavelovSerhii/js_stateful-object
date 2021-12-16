'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const resultState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(resultState, action.extraData);
        break;

      case 'removeProperties':
        for (let n = 0; n < action.keysToRemove.length; n++) {
          delete resultState[action.keysToRemove[n]];
        }
        break;

      case 'clear':
        Object.keys(resultState).forEach(key => delete resultState[key]);
        break;
    }

    /* if (action.type === 'addProperties') {
      Object.assign(resultState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (let n = 0; n < action.keysToRemove.length; n++) {
        delete resultState[action.keysToRemove[n]];
      }
    }

    if (action.type === 'clear') {
      Object.keys(resultState).forEach(key => delete resultState[key]);
    } */
  }

  return resultState;
}

module.exports = transformState;
