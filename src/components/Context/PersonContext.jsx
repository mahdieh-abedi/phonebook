import { useReducer, useEffect, createContext } from "react";
import Data from "../Data/Data"
import Reducer from "../Reducer/Reducer"
export const PersonContext = createContext({ person: [], dispatch: () => {} });

const PersonContextProvider = ({ children }) => {
  const [person, dispatch] = useReducer(
    Reducer,
    JSON.parse(localStorage.getItem("contacts")) || Data
  );
  useEffect(() => {
    document.title = "my contacts";
    localStorage.setItem("contacts", JSON.stringify(person));
  }, [person]);
  return (
    <PersonContext.Provider value={{ person, dispatch }}>
      {children}
    </PersonContext.Provider>
  );
};
export default PersonContextProvider;
