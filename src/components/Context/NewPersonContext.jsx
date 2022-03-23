import { useState, createContext } from "react";

export const NewPersonContext = createContext({
  newPerson: {},
  setNewPerson: () => {},
});

const NewPersonContextProvider = ({ children }) => {
  const [newPerson, setNewPerson] = useState({
    firstName: "",
    familyName: "",
    number: "",
    email: "",
    category: "",
    favorite: false,
  });
  return (
    <NewPersonContext.Provider value={{ newPerson, setNewPerson }}>
      {children}
    </NewPersonContext.Provider>
  );
};
export default NewPersonContextProvider;
