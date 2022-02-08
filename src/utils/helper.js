export const getItemFromLocalStorage = (key) => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setItemToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeItemFromLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};
