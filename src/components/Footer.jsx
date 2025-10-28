import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer=()=> (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexCenter} flex-col md:flex-row mb-8 w-full`}>
            <div>
                <img 
                src={logo} 
                alt=""
                className="w-[266px] h-[72px] object-contain"/>
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                A new way to make the payments easy, reliable and secure.
                </p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((item)=>(
                    <div key={item.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-normal text-[18px] leading-[27px] text-white ">{item.title}</h4>
                        <ul className="list-none mt-4">
                            {item.links.map((link,i)=>(
                                <li key={link.id} className={`${i!==item.links.length-1 ? 'mb-4' : 'mb-0'}font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ">
                2024 HooBank. All writes reserved
            </p>
            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((item,i)=>(
                    <div key={item.id}>
                        <img 
                        src={item.icon} 
                        alt="social-media" 
                        className={`${ i!==socialMedia.length-1 ? 'mr-6':'mr-0'} w-[21px] h-[21px] object-contain cursor-pointer`}
                        onClick={() => window.open(item.link)}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )

export default Footer;