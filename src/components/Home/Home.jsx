import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { FavoriteList, SortList } from "..";
import { ThemeContext } from "../Context/ThemeContext";
import { ContainerStyle, DividerStyle } from "../MyStyles/myStyles";
const Home = ({ sortDataByFirstName }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container style={ContainerStyle(theme)}>
      <div style={DividerStyle(theme)}>Favorite List</div>
      <FavoriteList sortDataByFirstName={sortDataByFirstName} />
      <div style={DividerStyle(theme)}>All Contacts</div>
      <SortList sortDataByFirstName={sortDataByFirstName} />
    </Container>
  );
};

export default Home;
