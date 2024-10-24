import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // 入力ごとに親コンポーネントの検索処理を呼び出す
  };

  return (
    <div className="search-container">
      <label>商品名</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="商品を検索"
      />
    </div>
  );
};

export default SearchBar;
