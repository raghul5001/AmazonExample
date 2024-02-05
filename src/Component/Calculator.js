import React, { useState } from 'react';

function Calculator() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      description: description,
      price: price,
      category: category
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs' 
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch('https://dummyjson.com/products/add', requestOptions);
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      console.log('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}  /><br />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}  /><br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Calculator;