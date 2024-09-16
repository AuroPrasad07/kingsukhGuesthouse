import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section id="contact" class="section">
        <div class="contact-container">
          <div class="contact-info">
            <div>
              <h2>Contact Info</h2>
              <ul class="info">
                <li>
                  <span>
                    <img src="../../../contactImages/location.png" alt="location" />
                  </span>
                  <span>
                    Beside Barshal Water Tank,
                    <br />
                    Manpur, Barhanti,
                    <br />
                    West Bengal 723156
                  </span>
                </li>
                <li>
                  <span>
                    <img src="../../../contactImages/mail.png" alt="mail" />
                  </span>
                  <span>
                    <a href="mailto: kkghosh0099@gmail.com">
                      kkghosh0099@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="../../../contactImages/call.png" alt="call" />
                  </span>
                  <span>
                    <a href="tel:+919007062180"> +91 9007062180 </a>
                  </span>
                </li>
              </ul>
            </div>
            <ul class="media">
              <li>
                <a href="#">
                  <img src="../../../contactImages/facebook.png" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../../../contactImages/instagram.png" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../../../contactImages/twitter.png" alt="twiter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../../../contactImages/linkedIn.png" alt="linkedIn" />
                </a>
              </li>
            </ul>
          </div>
          <div class="contactForm">
            <h2>Send a Message</h2>
            <div class="formBox">
              <div class="inputBox width-50">
                <input type="text" name="" required />
                <span>First Name</span>
              </div>
              <div class="inputBox width-50">
                <input type="text" required />
                <span>Last Name</span>
              </div>
              <div class="inputBox width-50">
                <input type="email" required />
                <span>Email Address</span>
              </div>
              <div class="inputBox width-50">
                <input type="text" required />
                <span>Mobile Number</span>
              </div>
              <div class="inputBox width-full">
                <textarea required></textarea>
                <span>Write your message here...</span>
              </div>
              <div class="inputBox width-full">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
