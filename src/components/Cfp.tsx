import React from "react"
import { Button } from "./Button"
import styles from "./cfp.module.css"

export const Cfp = () => (
  <div className={styles.cfp}>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span className={styles.code} />
        <Button
          onClick={() =>
            window.open("https://www.papercall.io/scala-italy-2020", "_blank")
          }
        >
          Become a Speaker
        </Button>
      </div>
      <div className={styles.description}>
        <h3>Be a speaker at Scala Italy!</h3>
        <p>
          Submit your talk proposal and come share your knowledge with the
          community!
        </p>
        <p />
      </div>
    </div>
  </div>
)
