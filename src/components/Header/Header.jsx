import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { ThemeContext } from "../Context/ThemeContext";
import { HeaderStyle, HeaderContainerStyle, ButtonStyle } from "../MyStyles/myStyles";
const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={HeaderStyle(theme)}>
      <Row position="sticky" style={HeaderContainerStyle(theme)}>
        <Col>
          <Link to="/setting">
            <MenuIcon style={ButtonStyle(theme)} fontSize="large" />
          </Link>
        </Col>
        <Col xs={7}>
          <Link to="/search">
            <Form.Control type="text" placeholder="Search ..." />
          </Link>
        </Col>
        <Col>
          <Link to="/create">
            <AddBoxIcon style={ButtonStyle(theme)} fontSize="large" />
          </Link>
        </Col>
      </Row>
      <Outlet />
    </div>
  );
};
export default Header;
