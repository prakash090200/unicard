import React from "react";
import cx from "classnames";
import Offer from "../Components/Offer";
import { OFFER_DATA } from "../constants";
import styles from "../styles/Body.module.css";

function Body() {
  return (
    <div className={styles.mainBody}>
      <div className={(styles.child1, styles.child)}>
        <p>
          Earn 1% assured cashback <span>on your spends. Get</span> 5X
        </p>
        <p>
          more value than cashback <span>at the Uni Store. Enjoy</span>
        </p>
        <p>
          <span>round the clock</span> Whatsapp support. <span>And it's</span>
        </p>{" "}
        <p>
          lifetime free; <span>no joining fee, no annual charges.</span>
        </p>
      </div>
      <div className={cx(styles.child2, styles.child)}>
        <img src={"/icons/arrow.svg"} alt="downarrow" />
      </div>
      <div className={cx(styles.child3, styles.child)}>
        {OFFER_DATA.map((item, i) => (
          <Offer
            key={i}
            textData={item.text}
            image={item.image}
            isFlip={i % 2}
          />
        ))}
      </div>
      <div className={cx(styles.child6, styles.child)}>
        <p>
          {" "}
          Lifetime <span>free.</span>No joining fee. No{" "}
        </p>
        <p>annual charges.</p>
      </div>
    </div>
  );
}
export default Body;
