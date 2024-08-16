'use client'
import React from 'react';
import { useQuery } from 'react-query';
 
export default function SearchBar() {

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/api/exp');
    return response.json();
  };

  const { data, isLoading } = useQuery('data', fetchData);

  if (!isLoading) {
    return <div>Loading...</div>;
  }

 
 
  return (
    <div>
      I am a search bar, {data}
    </div>
  )
}