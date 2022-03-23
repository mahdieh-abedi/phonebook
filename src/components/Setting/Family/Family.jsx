import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Avatar, Checkbox } from "@mui/material";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { PersonContext, NewPersonContext } from "../..";
import { ThemeContext } from "../../Context/ThemeContext";
import { IconStyle,ContainerStyle,DividerStyle,FontStyle,FavoriteIconStyle,DeleteButtonStyle} from "../../MyStyles/myStyles";
const Family = ({ sortDataByFirstName }) => {
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(PersonContext);
  const { setNewPerson } = useContext(NewPersonContext);
  const handleDelete = (ID) => {
    dispatch({ type: "Delete", payload: { ID } });
  };
  const handleFavorite = (ID, e) => {
    e.preventDefault();
    dispatch({ type: "Favorite", payload: { ID, checked: e.target.checked } });
  };
  return (
    <Container style={ContainerStyle(theme)}>
      <Row>
        <Link to="/setting">
          <ArrowBackIosNewIcon sx={{ fontSize: 25 }} style={IconStyle(theme)} />
        </Link>
      </Row>
      <div style={DividerStyle(theme)}>Family list</div>
      {sortDataByFirstName.filter((item) => item.category === "Family")
        .length === 0 ? (
        <h6 style={FontStyle(theme)}>
          there is no family category in your contacts
        </h6>
      ) : (
        sortDataByFirstName
          .filter((item) => item.category === "Family")
          .map((item) => (
            <Row key={item.id} className="mt-3">
              <Col>
                <Checkbox
                  onChange={(e) => handleFavorite(item.id, e)}
                  checked={item.favorite}
                  icon={<StarBorderIcon style={IconStyle(theme)} />}
                  checkedIcon={<StarIcon style={FavoriteIconStyle(theme)} />}
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
              <Col>
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

export default Family;
