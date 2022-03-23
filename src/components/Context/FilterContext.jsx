import { useState, createContext } from "react";

export const Filter = createContext({ filter: "", setFilter: () => {} });

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  return (
    <Filter.Provider value={{ filter, setFilter }}>{children}</Filter.Provider>
  );
};
export default FilterProvider;
