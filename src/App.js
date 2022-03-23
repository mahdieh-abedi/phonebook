import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ThemeContextProvider from "./components/Context/ThemeContext";
import {
  Header,
  Home,
  Search,
  Create,
  Edit,
  Family,
  Setting,
  Work,
  Friend,
  PersonProfile,
  PersonContext,
  NewPersonContext,
} from "./components";

function App() {
  const { person } = useContext(PersonContext);
  const { newPerson } = useContext(NewPersonContext);
  const sortDataByFirstName = person.sort((a, b) =>
    a.firstName > b.firstName ? 1 : -1
  );
  const InputAtribute = [
    {
      key: 1,
      name: "firstName",
      icon: <PermContactCalendarOutlinedIcon fontSize="large" />,
      value: newPerson.firstName,
    },
    {
      key: 2,
      name: "familyName",
      icon: <PermContactCalendarOutlinedIcon fontSize="large" />,
      value: newPerson.familyName,
    },
    {
      key: 3,
      name: "number",
      icon: <CallOutlinedIcon fontSize="large" />,
      value: newPerson.number,
    },
    {
      key: 4,
      name: "email",
      icon: <MarkunreadOutlinedIcon fontSize="large" />,
      value: newPerson.email,
    },
    {
      key: 5,
      name: "category",
      icon: <CategoryOutlinedIcon fontSize="large" />,
      value: newPerson.category,
    },
  ];
  return (
    <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route
                index
                element={<Home sortDataByFirstName={sortDataByFirstName} />}
              />
            </Route>
            <Route path="profile/:ID" element={<PersonProfile />} />
            <Route path="search" element={<Search />} />
            <Route path="setting" element={<Setting />} />
            <Route
              path="create"
              element={<Create InputAtribute={InputAtribute} />}
            />
            <Route
              path="edit/:ID"
              element={<Edit InputAtribute={InputAtribute} />}
            />
            <Route
              path="family"
              element={<Family sortDataByFirstName={sortDataByFirstName} />}
            />
            <Route
              path="friend"
              element={<Friend sortDataByFirstName={sortDataByFirstName} />}
            />
            <Route
              path="work"
              element={<Work sortDataByFirstName={sortDataByFirstName} />}
            />
          </Routes>
        </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
