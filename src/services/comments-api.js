import tokenService from '../services/tokenService';
const BASE_URL = '/api/comments';

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options, {mode: "cors"})
  .then(res => res.json());
}

export function create(comment) {
  console.log(comment)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(comment)
  }, {mode: "cors"}).then(res => res.json());
}

export function deleteOne(idx) {
  return fetch(`${BASE_URL}/${idx}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }, {mode: "cors"}).then(res => res.json());
}

