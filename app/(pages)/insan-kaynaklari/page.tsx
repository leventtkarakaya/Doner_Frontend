import React from "react";
import styles from "./insankaynaklari.module.css";
export default function page() {
  return (
    <>
      <div className="container mx-auto p-5">
        <div className="p-5">
          <form className="d-flex flex-column align-items-center gap-3">
            <h3 className="text-red">İnsan Kaynakları</h3>
            <div className={styles.forms}>
              <div className={styles.formsInput}>
                <input type="text" placeholder="sivas" />
                <input type="text" placeholder="sivas" />
              </div>
              <div className={styles.formsInput}>
                <input type="text" placeholder="sivas" />
                <input type="text" placeholder="sivas" />
              </div>
              <div className={styles.formsInput}>
                <input type="text" placeholder="sivas" />
                <input type="text" placeholder="sivas" />
              </div>
              <div className={styles.formsInput}>
                <input type="text" placeholder="sivas" />
                <input type="text" placeholder="sivas" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
