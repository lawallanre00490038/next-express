"use server";

// Fetch function
export const fetchMovies = async () => {
  const response = await fetch('/api/exp',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  console.log("fetchMovies");
  console.log(data);
  return data; // Ensure data is an array
};
