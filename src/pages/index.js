import React from "react"
import Cover from '../components/cover'
import CFP from '../components/cfp'
// import Speakers from '../components/speakers'
import Footer from '../components/footer'


export default () => 
<div className="app">
  <Cover />
  <CFP />
  { /* <Speakers
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
