import React from "react";
import "./Room.css";
import { RiHeartFill } from "react-icons/ri";
import { RiPaintFill } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";

const Room = ({ Image, RoomName, About, Span }) => {
  return (
    <div class="room_card">
      <div class="room_card_image">
        <img src={Image.src} alt="room" />
        <div class="room_card_icons">
          <span>
            <i class="ri-heart-fill">
              <RiHeartFill />
            </i>
          </span>
          <span>
            <i class="ri-paint-fill">
              <RiPaintFill />
            </i>
          </span>
          <span>
            <i class="ri-shield-star-line">
              <RiShieldStarLine />
            </i>
          </span>
        </div>
      </div>
      <div class="room_card_details">
        <h4>{RoomName}</h4>
        <p>{About}</p>
        <h5>
          Starting from <span>Rs. {Span}/night</span>
        </h5>
        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default Room;
