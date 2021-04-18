export function login(username, password) {
  return fetch('/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  })
  .then( res => res.text().then(res =>{
    localStorage.setItem('user', JSON.stringify(res));
    return res;
  }))
  .catch(error => console.log(error))
}