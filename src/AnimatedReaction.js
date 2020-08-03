import React from "react";
import {
  AiFillLike,
  AiFillHeart,
  FaLaughSquint,
  FaSadCry,
  FaAngry,
} from "react-icons/all";

const AnimatedReaction = () => {
  return (
    <div style={styles.container}>
      <div style={styles.button}>
        Hover Me
        <div style={styles.reactionContainer}>
          <div style={{ ...styles.reactionItem, backgroundColor: "#31A2FC" }}>
            <AiFillLike />
          </div>
          <div style={{ ...styles.reactionItem, backgroundColor: "#F4405B" }}>
            <AiFillHeart />
          </div>
          <div style={{ ...styles.reactionItem, backgroundColor: "#FCD55E" }}>
            <FaLaughSquint />
          </div>
          <div style={{ ...styles.reactionItem, backgroundColor: "#FCD55E" }}>
            <FaSadCry />
          </div>
          <div style={{ ...styles.reactionItem, backgroundColor: "#EB6012" }}>
            <FaAngry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedReaction;

const styles = {
  container: {
    paddingTop: 200,
  },
  button: {
    outline: "none",
    border: "1px solid #e1e1e1",
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 4,
    boxShadow: "0px 2px 4px rgba(0,0,0,0.12)",
    width: 100,
    textAlign: "center",
    fontFamily: "Arial",
    display: "block",
    margin: "auto",
    cursor: "pointer",
    fontSize: 18,
    position: "relative",
  },
  reactionContainer: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    bottom: "120%",
    left: -30,
  },
  reactionItem: {
    fontSize: 26,
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    margin: "0px 10px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.12)",
  },
};
