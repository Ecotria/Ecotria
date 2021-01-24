export const getStore = (name) => {
    if (!name) return
    return JSON.parse(window.localStorage.getItem(name))
  }