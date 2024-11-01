// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar videos..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            outline: 'none',
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
