import React from "react"
import styles from "./cover.module.css"

export const Cover = () => (
  <div className={styles.cover}>
    <img className={styles.logo} src={"./logo.png"} alt="logo" />
    <h1>The Italian conference on Scala</h1>
    <h3>Milano, September 2020</h3>
  </div>
)
