"use client";

import React, { useEffect } from 'react';
import { fetchMovies } from '@/utils/fetchData';
import { useQuery } from '@tanstack/react-query';

export default function SearchBar() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getTheData'],
    queryFn: () => fetchMovies(),
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry, there was an error</div>;


  return (
    <div>
      I am a search bar of {data.message}
    </div>
  );
}


  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['getTheData'],
  //   queryFn: () => fetch("http://localhost:5000/api/exp").then((res) => res.json()),
  // });

  // console.log(data);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Sorry, there was an error</div>;
