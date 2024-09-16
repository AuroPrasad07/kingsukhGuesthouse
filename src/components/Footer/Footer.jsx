import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="section_container footer_container">
          <div class="footer_col">
            <div class="logo">
              <a href="#home">
                <h4>Kingsukh Guest House</h4>
              </a>
            </div>
            <p class="section_description">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your
              getaway truly extraordinary.
            </p>
            <a>
              <button class="btn">BOOK NOW</button>
            </a>
          </div>
          <div class="footer_col">
            <h4>QUICK LINKS</h4>
            <ul class="footer_links">
              <li>
                <a href="#">Browse Destinations</a>
              </li>
              <li>
                <a href="#">Special Offers & Packages</a>
              </li>
              <li>
                <a href="#">Room Types & Amenities</a>
              </li>
              <li>
                <a href="#">Customer Reviews & Ratings</a>
              </li>
              <li>
                <a href="#">Travel Tips & Guides</a>
              </li>
            </ul>
          </div>
          <div class="footer_col">
            <h4>OUR SERVICES</h4>
            <ul class="footer_links">
              <li>
                <a href="#">Concierge Assistance</a>
              </li>
              <li>
                <a href="#">Flexible Booking Options</a>
              </li>
              <li>
                <a href="#">Airport Transfers</a>
              </li>
              <li>
                <a href="#">Wellness & Recreation</a>
              </li>
            </ul>
          </div>
          <div class="footer_col">
            <h4>CONTACT US</h4>
            <ul class="footer_links">
              <li>
                <a>
                  Address: Beside Barshal Water Tank, Manpur, Barhanti, West
                  Bengal 723156
                </a>
              </li>
              <li>
                <a>
                  kkghosh0099@gmail.com
                </a>
              </li>
              <li>
                <a>+91 9007062180 </a>
              </li>
            </ul>
            <div class="footer_socials">
              <a href="#">
                <img src="assets/facebook.png" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                target="_blank"
              >
                <img src="assets/instagram.png" alt="instagram" />
              </a>
              <a href="#">
                <img src="assets/youtube.png" alt="youtube" />
              </a>
              <a href="#">
                <img src="assets/twitter.png" alt="twitter" />
              </a>
            </div>
          </div>
        </div>
        <div class="footer_bar">
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
