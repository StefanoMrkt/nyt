import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setLight } from "../lightSlice";
import styles from "./Header.module.css";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FaAlignJustify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import sectionsData from "../sections";
import { useQueryContext } from "../QueryContext";

function Header(props) {
  const light = props.light;
  const sun = props.sun;

  const sections = sectionsData;

  function onChangeTheme() {
    props.setLight();
  }

  const [vis, setVis] = useState(false);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const { queries } = useQueryContext();

  const NewDate = new Date();
  const Giorno = NewDate.getDate();
  const Mese = NewDate.toLocaleString("en", { month: "long" });
  const Anno = NewDate.getFullYear();

  function onClickSearch() {
    setVis(!vis);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${text}`, { state: { text } });
  }

  //Sezioni Navbar
  const TotalSection = Object.keys(queries).map((section, index) => {
    return (
      <button
        key={index}
        className={`${styles.bNav} bnavLight`}
        onClick={() =>
          navigate(`/section/${section}`, {
            state: {
              data: queries[section],
            },
          })
        }
      >
        {section}
      </button>
    );
  });

  return (
    <>
      <div className={styles.header}>
        <div className={styles.icon}>
          <div className={styles.iconLeft}>
            <div className={styles.navbar}>
              <Navbar expand="lg" className="navbar">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FaAlignJustify
                      className={`${styles.hamburger} hamburger`}
                    />
                  </Navbar.Toggle>
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={{
                      backgroundColor: `lightgray`,
                      marginTop: `8px`,
                    }}
                  >
                    <Nav className="me-auto">
                      {TotalSection && (
                        <div className={styles.divNav}>
                          <strong className={styles.titleNav}>Sections:</strong>
                          {TotalSection}
                        </div>
                      )}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>

            <button
              type="button"
              className={styles.iconSearch}
              onClick={onClickSearch}
            >
              <div>
                <FaSearch className="SearchFA" />
              </div>
            </button>

            {vis && (
              <div className={styles.search}>
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                  />
                </Form>
              </div>
            )}
          </div>
          <div className={styles.iconRight}>
            <button
              type="button"
              className={styles.but}
              onClick={onChangeTheme}
            >
              {sun ? <FaSun className="sunFA" /> : <FaMoon className="sunFA" />}
            </button>
          </div>
        </div>
        <div className={styles.secondLine}>
          <div className={styles.date}>
            <strong>
              {Giorno} {Mese}, {Anno}
            </strong>
          </div>
          <div className={styles.logo}>
            <Link to="/" className={styles.link}>
              <h1 className={styles.NY}>The New York Times</h1>
            </Link>
          </div>
          <div className={styles.empty}></div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
}

//Funzione per rendere visibili come props le 2 variabili
function mapStateToProps(state) {
  return {
    light: state.lightDark.light,
    sun: state.lightDark.sun,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLight: () => dispatch(setLight()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
