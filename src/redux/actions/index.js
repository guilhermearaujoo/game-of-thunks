export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const url = 'https://anapioficeandfire.com/api/characters'

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(data) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: data,
  };
}

function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchGameOfThrones(character) {
  const name = /\s/g.test(character) ? `?name=${character.trim().split(' ').join('+')}` : `/${character}`
  return (dispatch) => {
    dispatch(requestStarted());
    fetch(`${url}${name}`)
      .then(response => response.json())
      .then(data => {
        if(data.length > 0) {
          dispatch(requestSuccessful({ ...data[0]}))
        } else if(Object.keys(data).length !== 0) {
          dispatch(requestSuccessful(data))
        } else {
          dispatch(requestFailed('Character not found'));
        }
      })
      .catch((error) => dispatch(requestFailed(error)));
  }
}