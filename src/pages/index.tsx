import React from "react"
import styles from "./index.module.css"
import { Cover } from "../components/Cover"
// import { Cfp } from "../components/Cfp"
import { Footer } from "../components/Footer"
// import Speakers from '../components/speakers'
import { Helmet } from "react-helmet"

export default () => (
  <div className={styles.app}>
    <Helmet>
      <title>Scala Italy 2020</title>
      <meta
        name="Description"
        content="Scala Italy 2020 - The Italian conference on Scala"
      />
    </Helmet>
    <Cover />
    {/* <Cfp /> */}
    {/* <Speakers
    speakerId={speakerId}
    onSpeakerClick={onSpeakerClick}
    onSpeakerModalClose={onSpeakerModalClose}
  /> */}
    {/* <Sponsors /> */}
    {/* <Supporters /> */}
    {/* <Partners /> */}
    {/* <Schedule />
    <Venue /> */}
    <Footer />
  </div>
)
