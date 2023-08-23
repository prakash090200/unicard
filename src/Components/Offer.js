import React from "react";
import styles from "../styles/Offer.module.css";

export default function Offer(props) {
  const { textData, image, isFlip = false } = props;
  const textArray = textData.split("&");
  return (
    <div className={isFlip ? styles.containerRight : styles.containerLeft}>
      <div className={styles.leftSide}>
        <div className={styles.text}>
          <strong>{textArray[0]}</strong>
          {textArray[1]}
        </div>
      </div>
      <div className={styles.rightSide}>
        <img src={image} width={448} />
      </div>
    </div>
  );
}
