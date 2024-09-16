import React from "react";
import "./About.css";
import about_img from "../../../public/assets/out.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      <section class="booking_container">
        <div class="booking_form">
          <button>BOOK NOW</button>
        </div>
      </section>

      <section className="about_room_container" id="about">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          class="about_image"
        >
          <img src={about_img} alt="about" />
        </motion.div>
        <div class="about_content">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.3 }}
            class="section_subheader"
          >
            ABOUT US
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.3 }}
            class="section_header"
          >
            The Best Holidays Start Here!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.3 }}
            class="section_description"
          >
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </motion.p>
          <h4>
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </h4>
          <h4>Contact us: +91 9007062180</h4> <br />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.3 }}
            class="about_btn"
          >
            <button class="btn">BOOK NOW</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
