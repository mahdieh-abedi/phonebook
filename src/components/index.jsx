import Create from "./Create&Edit Pages/Create/Create";
import Edit from "./Create&Edit Pages/Edit/Edit";
import Home from "./Home/Home";
import Profile from "./PersonProfile/PersonProfile";
import Search from "./Home/Search/Search";
import Setting from "./Setting/Setting";
import Data from "../components/Data/Data";
import FavoriteList from "./Home/FavoriteList/FavoriteList";
import SortList from "./Home/SortList/SortList";
import Header from "./Header/Header";
import PersonProfile from "./PersonProfile/PersonProfile";
import Family from "./Setting/Family/Family";
import Friend from "./Setting/Friend/Friend";
import Work from "./Setting/Work/Work";
import PersonContextProvider, { PersonContext } from "./Context/PersonContext";
import NewPersonContextProvider, {
  NewPersonContext,
} from "./Context/NewPersonContext";
import FilterProvider, { Filter } from "./Context/FilterContext";
import Reducer from "../components/Reducer/Reducer";

export {
  Create,
  Edit,
  Home,
  Profile,
  Search,
  Setting,
  FavoriteList,
  SortList,
  Header,
  PersonProfile,
  Family,
  Friend,
  Work,
  Data,
  PersonContextProvider,
  PersonContext,
  NewPersonContextProvider,
  NewPersonContext,
  FilterProvider,
  Filter,
  Reducer,
};
