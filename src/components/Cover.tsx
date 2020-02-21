import React from "react"
import styles from "./cover.module.css"

import logo from "./logo.png"

export const Cover = () => (
  <div className={styles.cover}>
    <img className={styles.logo} src={logo} alt="Scala Italy Logo" />
    <h1>The Italian conference on Scala</h1>
    <h3>Milano, September 2020</h3>
  </div>
)
