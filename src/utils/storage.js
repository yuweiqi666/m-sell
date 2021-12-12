export const setItem = (key, value) => {
  const relVal = JSON.stringify(value)
  sessionStorage.setItem(key, relVal)
}

export const getItem = key => {
  const result = JSON.parse(sessionStorage.getItem(key))
  return result
}

export const removeItem = key => {
  sessionStorage.removeItem(key)
}
