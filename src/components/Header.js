"use client";
import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar
      className="bg-white shadow-sm p-3 mb-4"
      expand="lg"
      expanded={expanded}
    >
      <Container fluid>
        <div className="d-flex align-items-center justify-content-between w-100">
          <div>
            <small className="text-muted">Hi Rayyan</small>
            <h4 className="fw-bold mb-0 text-wrap">
              {isSmallScreen ? "Welcome" : "Welcome to Your Dashboard"}
            </h4>
          </div>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="ms-2"
          />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <i
              className="bi bi-bell me-3 text-warning"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            ></i>

            <div className="position-relative">
              <div
                className="d-flex align-items-center text-decoration-none"
                style={{ cursor: "pointer" }}
                onClick={toggleMenu}
              >
                <FaUserCircle size={40} className="me-2 text-secondary" />
                Rayyan
              </div>
              {showMenu && (
                <div
                  className="position-absolute bg-white shadow-sm rounded p-2 mt-2"
                  style={{ right: 0, zIndex: 1050 }}
                >
                  <a
                    href="#profile"
                    className="d-block text-dark text-decoration-none p-2"
                  >
                    Profile
                  </a>
                  <a
                    href="#settings"
                    className="d-block text-dark text-decoration-none p-2"
                  >
                    Settings
                  </a>
                  <a
                    href="#logout"
                    className="d-block text-dark text-decoration-none p-2"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
