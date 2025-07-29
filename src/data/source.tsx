const fetchData = async () => {
  const result = await fetch("https://6557686cbd4bcef8b61294a7.mockapi.io/cars")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => alert(`Something went wrong: ${err}`));
  return result;
};

export const data = async () => {
  const data = await fetchData();
  return data;
};
