import { HashLink } from "react-router-hash-link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { gsap } from "gsap/all";

const Header = () => {
  const [display, setDisplay] = useState("block");
  const [open, setOpen] = useState(false);

  document.title = "Hassaam Mughal";
  const hashLinkStyle = {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
    width: "100%",
    textAlign: "center",
    padding: "5px",
    borderBottom: "1px solid",
    margin: "6px",
  };

  const handleOnCLick = () => {
    console.log("Ok!");
    if (display === "block") {
      setDisplay("none");
      setOpen(true);
    } else {
      setDisplay("block");
      setOpen(false);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    boxShadow: 24,
    bgcolor: "#00bd95",
    height: "300px",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    p: 6,
  };

  useEffect(() => {
    gsap.set([".header", ".nav-links", ".logo"], {
      opacity: 0,
      y: '100%'
    });
    gsap.to(".header", {
      delay: 1,
      duration: 1,
      opacity: 1,
      y: -"100%",
    });
    gsap.to(".nav-links", {
      delay: 1.4,
      duration: 2,
      opacity: 1,
    })
    gsap.to('.logo', {
      delay: 1.2,
      y: -"100%",
      opacity: 1,
    })
  }, []);

  return (
    <div className="header">
      <h2 className="logo">Portfolio.</h2>
      <div className={`links`}>
        <HashLink className="nav-links" to={"/#home"}>Home</HashLink>
        <HashLink className="nav-links" to={"/#skills"}>Skills</HashLink>
        <HashLink className="nav-links" to={"/#technologies"}>Technologies</HashLink>
        <HashLink className="nav-links" to={"/#projects"}>Projects</HashLink>
        <HashLink className="nav-links" to={"/#contacts"}>Contacts</HashLink>
      </div>
      <div className="toogle-menu">
        <IconButton onClick={handleOnCLick}>
          {display === "block" ? (
            <MenuRoundedIcon className=" icon" />
          ) : (
            <CloseRoundedIcon className=" icon" />
          )}
        </IconButton>
        <Modal
          open={open}
          className="modal"
          onClose={handleOnCLick}
          aria-labelledby="menu-items"
          aria-describedby="menu-items-modal"
        >
          <Box sx={style} className="box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              <HashLink
                to={"/#home"}
                style={hashLinkStyle}
                onClick={() => {
                  setOpen(false);
                  setDisplay("block");
                }}
              >
                Home
              </HashLink>
              <HashLink
                to={"/#skills"}
                style={hashLinkStyle}
                onClick={() => {
                  setOpen(false);
                  setDisplay("block");
                }}
              >
                Skills
              </HashLink>
              <HashLink
                to={"/#technologies"}
                style={hashLinkStyle}
                onClick={() => {
                  setOpen(false);
                  setDisplay("block");
                }}
              >
                Technologies
              </HashLink>
              <HashLink
                to={"/#projects"}
                onClick={() => {
                  setOpen(false);
                  setDisplay("block");
                }}
                style={hashLinkStyle}
              >
                Projects
              </HashLink>
              <HashLink
                to={"/#contacts"}
                onClick={() => {
                  setOpen(false);
                  setDisplay("block");
                }}
                style={hashLinkStyle}
              >
                Contacts
              </HashLink>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
