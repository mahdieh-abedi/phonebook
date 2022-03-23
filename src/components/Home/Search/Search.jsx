import React, { useContext } from "react";
import { PersonContext, NewPersonContext, Filter } from "../..";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar, Checkbox } from "@mui/material";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ThemeContext } from "../../Context/ThemeContext";
import { IconStyle,ContainerStyle,FontStyle,FavoriteIconStyle,DeleteButtonStyle} from "../../MyStyles/myStyles";
const Search = () => {
  const{theme}=useContext(ThemeContext)
  const { person, dispatch } = useContext(PersonContext);
  const { setNewPerson } = useContext(NewPersonContext);
  const { filter, setFilter } = useContext(Filter);
  const handleDelete = (ID) => {
    dispatch({ type: "Delete", payload: { ID } });
  };
  const handleFavorite = (ID, e) => {
    e.preventDefault();
    dispatch({ type: "Favorite", payload: { ID, checked: e.target.checked } });
  };
  return (
    <Container  style={ContainerStyle(theme)}>
      <Row>
        <Link to="/">
          <ArrowBackIosNewIcon
            sx={{ fontSize: 25 }}
            style={IconStyle(theme)}
          />
        </Link>
      </Row>
      <Row className="mt-3">
        <Col xs={12}>
          <Form>
            <Form.Control
              type="text"
              placeholder="Search ..."
              onChange={(e) => setFilter(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      {person.filter(
        (item) =>
          item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
          item.familyName.toLowerCase().includes(filter.toLowerCase()) ||
          item.email.toLowerCase().includes(filter.toLowerCase()) ||
          item.number.includes(filter)
      ).length === 0 ? (
        <h6 style={FontStyle(theme)}>o0ops... there is no contact with this name</h6>
      ) : (
        person
          .filter(
            (item) =>
              item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
              item.familyName.toLowerCase().includes(filter.toLowerCase()) ||
              item.email.toLowerCase().includes(filter.toLowerCase()) ||
              item.number.includes(filter)
          )
          .map((item) => (
            <Row key={item.id} className="mt-3">
              <Col xs={2}>
              <Checkbox
                  onChange={(e) => handleFavorite(item.id, e)}
                  checked={item.favorite}
                  icon={<StarBorderIcon style={IconStyle(theme)} />}
                  checkedIcon={
                    <StarIcon style={FavoriteIconStyle(theme)} />
                  }
                />
              </Col>
              <Col xs={2}>
                <Link to={`/profile/${item.id}`}>
                  <Avatar {...stringAvatar("Kent Dodds")} src={item.image} />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to={`/profile/${item.id}`}>
                  <h6 style={FontStyle(theme)}>{item.firstName}</h6>
                </Link>
              </Col>
              <Col xs={2}>
                <ClearIcon
                  style={DeleteButtonStyle(theme)}
                  onClick={() => handleDelete(item.id)}
                />
              </Col>
              <Col>
              <Link to={`/edit/${item.id}`}>
                  <ModeEditIcon
                    style={IconStyle(theme)}
                    onClick={() => {
                      setNewPerson(item);
                    }}
                  />
                </Link>
              </Col>
            </Row>
          ))
      )}
    </Container>
  );
};

export default Search;
