import React from "react"
import cx from "classnames"
import styles from "./button.module.css"

interface Props {
  children: string
  onClick: () => void
  className?: string
}

export const Button = ({ className, children, onClick }: Props) => (
  <button className={cx(className, styles.button)} onClick={onClick}>
    {children}
  </button>
)
