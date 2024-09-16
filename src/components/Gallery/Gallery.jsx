import React from "react";
import "./Gallery.css";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div>
      <section id="gallary">
        <div class="about_content">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            class="section_subheader"
            style={{ textAlign: "center" }}
          >
            GALLARY
          </motion.p>
        </div>
        <div class="gallery_container">
          <div class="box a">
            <img src="../../../assets/out.jpg" alt="gallery_image" />
          </div>
          <div class="box b">
            <img src="../../../assets/ayodhya.webp" alt="gallery_image" />
          </div>
          <div class="box c">
            <img src="../../../assets/large.jpg" alt="gallery_image" />
          </div>
          <div class="box d">
            <img src="../../../assets/palash.webp" alt="gallery_image" />
          </div>
          <div class="box e">
            <img src="../../../assets/small.jpg" alt="gallery_image" />
          </div>
          <div class="box f">
            <img src="../../../assets/baranti.webp" alt="gallery_image" />
          </div>
          <div class="box g">
            <img src="../../../assets/recep.jpg" alt="gallery_image" />
          </div>
          <div class="box h">
            <img src="../../../assets/flower.jpg" alt="gallery_image" />
          </div>
          <div class="box j">
            <img src="../../../assets/room1.jpg" alt="gallery_image" />
          </div>
          <div class="box i">
            <img src="../../../assets/mithonDam.webp" alt="gallery_image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
