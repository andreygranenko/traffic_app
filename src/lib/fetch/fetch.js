
export const fetchSingleRule = async (collection) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/getsinglerule?collection=${collection}`);

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
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/getalldata`);

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
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/getsigngroup?collection=${collection}&page=${page}&limit=${limit}`);

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


export const fetchQuizQuestions = async (collection) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/getquizquestions?collection=${collection}`);

  if (response.ok) {
    return await response.json();
  } else {
    if (typeof window !== "undefined") {
      // Client-side execution
      alert('Failed to fetch data !\n' + response.statusText);
    } else {
      // Server-side execution
      console.log(response.statusText);
    }
  }
}