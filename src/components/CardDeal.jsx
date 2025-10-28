import React from "react";
import { card } from "../assets";
import styles,{layout} from '../style'
import Button from "./Button";

const CardDeal=()=> (
    <section id="product" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal <br className="sm-block hidden"/> in a few steps.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias velit sint temporibus quisquam, iure maiores mollitia iste, incidunt dolorum doloremque quas excepturi commodi est esse rerum. Ipsam incidunt assumenda harum?</p>
            <Button styles="mt-10"/>
        </div>
        <div className={`${layout.sectionImg}`}>
            <img src={card} className="w-[100%] h-[100%] relative z-[5]"/>
            <div className="absolute z-[3] white__gradient -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
            <div className="absolute z-[0] pink__gradient -left-1/2 bottom -0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        </div>
    </section>
    )

export default CardDeal;