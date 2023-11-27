import Link from "next/link";
import React from "react";
import styles from "./css/Button.module.css";

const Button = ({ link, text, color }) => {
  const btnColor = color ? color : "#5d5dff";
  const buttonStyle = { background: btnColor };

  return (
    <div className={styles["upsale-button-div"]}>
      <Link
        href={link}
        className={`${styles["upsale-button"]} `}
        style={buttonStyle}
      >
        <span style={buttonStyle}>{text}</span>
      </Link>
    </div>
  );
};

export default Button;
