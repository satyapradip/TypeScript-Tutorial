import type { ChangeEvent } from "react";

interface SearchBoxProps {
  value: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

function SearchBox({
  value,
  onSearchChange,
  placeholder = "Search by chai name...",
}: SearchBoxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <label className="search-box" htmlFor="chai-search">
      <span>Search Chai</span>
      <input
        id="chai-search"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
}

export default SearchBox;
