function getSession(key){
  return window.sessionStorage.getItem(key)
}

function setSession(key, value){
  return window.sessionStorage.setItem(key, value)
}

export {getSession, setSession}