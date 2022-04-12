import {ON_COMPLETE_CHALLENGE} from './types';

export const onCompleteChallenge = () => {
  return async dispatch => {
    dispatch({
      type: ON_COMPLETE_CHALLENGE,
    });
  };
};
