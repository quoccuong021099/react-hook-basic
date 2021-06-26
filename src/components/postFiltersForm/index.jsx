import React, { useRef, useState } from "react";

function PostFilter({ onSubmit = null }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = { searchTerm: value };
      onSubmit(formValue);
    }, 100);
  };
  return (
    <div>
      <input type="text" onChange={handleSearchTermChange} />
    </div>
  );
}

export default PostFilter;
