import React from "react";
import "./Rooms.css";
import Room from "../Room/Room";
import { motion } from "framer-motion";

const Rooms = () => {
  return (
    <section class="room_container" id="rooms">
      <p class="section_subheader">OUR LIVING ROOM</p>
      <h2 class="section_header">The Most Memorable Rest Time Starts Here.</h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        class="room"
      >
        <Room
          Image={{ src: "assets/small.jpg" }}
          RoomName={"Cozy Haven Room"}
          About={
            "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation."
          }
          Span={"1000"}
        />
        <Room
          Image={{ src: "assets/large.jpg" }}
          RoomName={"Spacious Serenity Suite"}
          About={
            "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance."
          }
          Span={"1500"}
        />
      </motion.div>
    </section>
  );
};

export default Rooms;
