import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Checkbox } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CallIcon from "@mui/icons-material/Call";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { PersonContext } from "..";
import { ThemeContext } from "../Context/ThemeContext";
import { IconStyle,ContainerStyle,FontStyle,FavoriteIconStyle} from "../MyStyles/myStyles";
const PersonProfile = () => {
  const { theme } = useContext(ThemeContext);
  const { person,dispatch } = useContext(PersonContext);
  const { ID } = useParams();
  const handleFavorite = (ID, e) => {
    e.preventDefault();
    dispatch({ type: "Favorite", payload: { ID, checked: e.target.checked } });
  };
  return (
    <Container style={ContainerStyle(theme)}>
      <Row>
        <Link to="/">
          <ArrowBackIosNewIcon
            sx={{ fontSize: 25 }}
            style={IconStyle(theme)}
          />
        </Link>
      </Row>
      <div>
        {person
          .filter((item) => item.id === JSON.parse(ID))
          .map((item) => (
            <>
              <Row className="mt-2">
                <Col className="ImgContainer">
                  <img height={250} src={item.image} alt="avatar" />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col xs={10}>
                  <h6 style={FontStyle(theme)}>
                    {item.firstName} {item.familyName}
                  </h6>
                </Col>
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
              </Row>
              <Row className="mt-2">
                <h6 style={FontStyle(theme)}>
                  Phone Number: {item.number}
                </h6>
              </Row>
              <Row className="mt-2">
                <h6 style={FontStyle(theme)}>
                  {" "}
                  category Group: {item.category}
                </h6>
              </Row>
              <Row className="mt-2">
                <h6 style={FontStyle(theme)}>
                  Email Adress: {item.email}
                </h6>
              </Row>
              <Row className="mt-3">
                <Col>
                  <CallIcon color="success" fontSize="large" />
                </Col>
                <Col>
                  <ChatBubbleOutlineIcon
                    style={IconStyle(theme)}
                    fontSize="large"
                  />
                </Col>
                <Col>
                  <WhatsAppIcon color="success" fontSize="large" />
                </Col>
                <Col>
                  <LinkedInIcon color="primary" fontSize="large" />
                </Col>
              </Row>
            </>
          ))}
      </div>
    </Container>
  );
};

export default PersonProfile;
