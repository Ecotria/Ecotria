/** @format */

export const formatDate = (date) => {
  const d = date.split("-").reverse();
  return `${d[0].slice(0, 2)}/${d[1]}/${d[2]}`;
};
