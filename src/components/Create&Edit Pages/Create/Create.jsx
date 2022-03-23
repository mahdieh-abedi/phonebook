import "../Create&Edit.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { PersonContext, NewPersonContext } from "../..";
import { ThemeContext } from "../../Context/ThemeContext";
import {ContainerStyle,IconStyle,ButtonStyle} from "../../MyStyles/myStyles"
const Create = ({ InputAtribute }) => {
  const navigate=useNavigate()
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(PersonContext);
  const { newPerson, setNewPerson } = useContext(NewPersonContext);
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newPerson.id) {
      dispatch({
        type: "Add",
        payload: {
          newPerson,
        },
      });
    }
    navigate(-1)
    setNewPerson({
      firstName: "",
      familyName: "",
      number: "",
      email: "",
      category: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };
  return (
    <Container style={ContainerStyle(theme)}>
      <Row>
        <Link to="/">
          <ArrowBackIosNewIcon
            sx={{ fontSize: 25 }}
            style={IconStyle(theme)}
          />{" "}
        </Link>
      </Row>
      <Row className="mt-3">
        <Col className="ImgContainer">
          <img
            height={250}
            src="https://i.pinimg.com/564x/4c/f3/79/4cf379eb39ef955bb3e2df4be81f4503.jpg"
            alt="avatar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <form onSubmit={handleAdd}>
          {InputAtribute.map((item) => (
            <div key={item.key}>
              <label
                htmlFor={item.name}
                className="m-2"
                style={IconStyle(theme)}
              >
                {item.icon}
              </label>
              <input
                className="m-2"
                required
                type="text"
                placeholder={item.name}
                name={item.name}
                value={item.value}
                id={item.value}
                onChange={handleChange}
              ></input>
              <br />
            </div>
          ))}
          <div className="buttonBox">
            <Button type="submit" className="SubmitBtn">
              <AddBoxIcon
                style={ButtonStyle(theme)}
                sx={{ fontSize: 40 }}
              />
            </Button>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default Create;
