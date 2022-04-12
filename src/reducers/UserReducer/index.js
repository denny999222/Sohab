import {ON_COMPLETE_CHALLENGE} from '@actions/UserActions/types';

const INITIAL_STATE = {
  shsA: 200,
  shsB: 20,
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case ON_COMPLETE_CHALLENGE:
      return {...state, shsA: state.shsA + 250, shsB: state.shsB + 25};
    default:
      return state;
  }
};
