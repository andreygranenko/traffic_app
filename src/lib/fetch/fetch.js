export const fetchSingleRule = async (collection) => {
  const response = await fetch(`http://localhost:3000/api/getsinglerule?collection=${collection}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log(response.statusText)
    alert('Failed to fetch data!');
  }
}

export const fetchAllRules = async () => {
  const response = await fetch('http://localhost:3000/api/getalldata');

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log(response.statusText)
    alert('Failed to fetch data!');
  }
};