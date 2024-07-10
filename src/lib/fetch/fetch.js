
export const fetchSingleRule = async (collection) => {
  const response = await fetch(`http://localhost:3000/api/getsinglerule?collection=${collection}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    if (typeof window !== "undefined") {
      // Client-side execution
      alert('Failed to fetch data!');
    } else {
      // Server-side execution
      console.log(response.statusText);
    }
  }
}

export const fetchAllRules = async () => {
  const response = await fetch('http://localhost:3000/api/getalldata');

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    if (typeof window !== "undefined") {
      // Client-side execution
      alert('Failed to fetch data!');
    } else {
      // Server-side execution
      console.log(response.statusText);
    }
  }
};


export const fetchSignGroup = async (collection, page = 1, limit = 10) => {
  const response = await fetch(`http://localhost:3000/api/getsigngroup?collection=${collection}&page=${page}&limit=${limit}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    if (typeof window !== "undefined") {
      // Client-side execution
      alert('Failed to fetch data !\n' + response.statusText);
    } else {
      // Server-side execution
      console.log(response.statusText);
    }
  }
};
