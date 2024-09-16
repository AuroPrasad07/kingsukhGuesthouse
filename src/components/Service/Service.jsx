import React from "react";
import "./Service.css";
import { RiShieldStarLine } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";
import { RiRestaurant2Fill } from "react-icons/ri";
import { RiMap2Line } from "react-icons/ri";
import { motion } from "framer-motion";

const leftUp = {
  hidden: {
    opacity: 0,
    x: 100
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.4,
    }
  }
}

const Service = () => {
  return (
    <>
      <section class="service" id="service">
        <div class="service_container">
          <div class="service_content">
            <p class="section_subheader">SERVICES</p>
            <h2 class="section_header">Strive Only For The Best.</h2>
            <motion.ul initial="hidden" whileInView="show" variants={leftUp} class="service_list">
              <motion.li variants={leftUp}>
                <span>
                  <i class="ri-shield-star-line">
                    <RiShieldStarLine />
                  </i>
                </span>
                High Class Security
              </motion.li>
              <motion.li variants={leftUp}>
                <span>
                  <i class="ri-24-hours-line">
                    <Ri24HoursLine />
                  </i>
                </span>
                24 Hours Room Service
              </motion.li>
              <motion.li variants={leftUp}>
                <span>
                  <i class="ri-restaurant-2-fill">
                    <RiRestaurant2Fill />
                  </i>
                </span>
                Restaurant
              </motion.li>
              <motion.li variants={leftUp}>
                <span>
                  <i class="ri-map-2-line">
                    <RiMap2Line />
                  </i>
                </span>
                Tourist Guide Support
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </section>
      <section class="banner_container">
        <div class="banner_content">
          <div class="banner_card">
            <h4>100+</h4>
            <p>Bookings Completed</p>
          </div>
          <div class="banner_card">
            <h4>150+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;