"use server";

// Fetch function
export const fetchMovies = async () => {
  const response = await fetch('http://localhost:5000/api/custom/post/45',
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
