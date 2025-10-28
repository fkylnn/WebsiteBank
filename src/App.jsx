import styles from "./style";
import React from "react";

import {Nav,Hero,Stats,Bussiness,Footer,Billing,CardDeal,Testimonials,Clients,CTA} from "./components"

const App=()=>{
  return (
    <div className="bg-primary w-full overflow-hidden text-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav/>
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Bussiness/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}


export default App;