import { FormEventHandler, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
  const [params, setParams] = useSearchParams();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setParams(`q=${search}`);
  };

  return (
    <div className="py-2 align-center">
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-secondary rounded-md w-full border-none mt-1 px-4 py-4 text-white shadow-sm focus:outline-dashed focus:outline-white sm:text-sm sm:leading-6"
        />
      </form>
    </div>
  );
};

export default SearchBar;
