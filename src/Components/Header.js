import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.uniIcons}>
        <div className={styles.uniIcon}>
          <img src={"/icons/logo.svg"} alt="unicard"></img>
        </div>
        <button className={styles.buttonuniCard}>Uni Paycheck</button>
      </div>
      <div className={styles.headerSection}>
        <div className={styles.headerLeft}>
          <div className={styles.headerText}>
            <strong>NX Wave.</strong>The next-gen credit card for those who love
            rewards.
          </div>
          <div className={styles.headerSubText}>
            <span>1% Cashback</span>
            <span>
              <img src="/icons/plus.svg" alt="plus" />
            </span>
            <span>5x Rewards</span>
            <span>
              <img src="/icons/plus.svg" alt="plus" />
            </span>
            <span>Zero Forex Markup</span>
          </div>
          <div className={styles.form}>
            <div className={styles.inputField}>
              <input type="text" placeholder="Enter Phone Number" />
            </div>
            <button className={styles.applyNow}>Apply Now</button>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" checked />
            <div className={styles.unicardNote}>
              You agree to be contacted by unicard over Call, SMS, Email or
              WhatsApp to guide you through your application.
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <img src={"/images/uni_cards.png"} alt={"unicard"} />
        </div>
      </div>
    </div>
  );
}
export default Header;
