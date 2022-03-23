import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonContext } from "..";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "../Context/ThemeContext";
import Themes from "../Context/Themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  IconStyle,
  FontStyle,
  ModeIconsStyle,
  DividerStyle,
  SettingPageStyle,
} from "../MyStyles/myStyles";
const Setting = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { person } = useContext(PersonContext);
  const handleChangeTheme = (e) => {
    e.preventDefault();
    e.target.checked ? setTheme(Themes.dark) : setTheme(Themes.light);
  };
  return (
    <Container style={SettingPageStyle(theme)}>
      <Row className="mt-3">
        <Col xs={12}>
          <Link to="/">
            <ArrowBackIosNewIcon
              sx={{ fontSize: 25 }}
              style={IconStyle(theme)}
            />
          </Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6} style={FontStyle(theme)}>
          Change Mode:
        </Col>
        <Col xs={6}>
          <LightModeIcon style={ModeIconsStyle(theme)} />
          <Switch
            checked={theme.status}
            color="default"
            onChange={(e) => handleChangeTheme(e)}
          />
          <DarkModeIcon style={ModeIconsStyle(theme)} />
        </Col>
      </Row>
      <div className="mt-5" style={DividerStyle(theme)}>
        Setting
      </div>
      <Row>
        <Col xs={6}>
          <h6 style={FontStyle(theme)}>{person.length} Contacts</h6>
        </Col>
      </Row>
      <div style={DividerStyle(theme)}>Categories</div>
      <Link to="/family">
        <Row className="mt-3">
          <Col xs={2}>
            <FamilyRestroomIcon style={IconStyle(theme)} fontSize="large" />
          </Col>
          <Col style={FontStyle(theme)}>Family</Col>
        </Row>
      </Link>
      <Link to="/friend">
        <Row className="mt-3">
          <Col xs={2}>
            <GroupIcon style={IconStyle(theme)} fontSize="large" />
          </Col>
          <Col style={FontStyle(theme)}>Friend</Col>
        </Row>
      </Link>
      <Link to="/work">
        <Row className="mt-3">
          <Col xs={2}>
            <WorkIcon style={IconStyle(theme)} fontSize="large" />
          </Col>
          <Col style={FontStyle(theme)}>Work</Col>
        </Row>
      </Link>
    </Container>
  );
};

export default Setting;
