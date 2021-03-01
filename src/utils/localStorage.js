export const setItem = (key, value) => {
  localStorage.setItem('strek_site', JSON.stringify({ [key]: value }));
  // localStorage.setItem(key, value);
};
export const updateItem = (key, value) => {
  let storedData = JSON.parse(localStorage.getItem('strek_site'));
  storedData !== undefined
    ? (storedData = JSON.stringify({ ...storedData, [key]: value }))
    : (storedData = JSON.stringify({ [key]: value }));
  localStorage.setItem('strek_site', storedData);
};

export const getItem = (key) => {
  const storedData = JSON.parse(localStorage.getItem('strek_site'));

  return storedData !== null ? storedData[key] : null;
};
