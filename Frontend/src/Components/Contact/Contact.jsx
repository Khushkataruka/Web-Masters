import React from "react";
import "./Contact.css";
import Navbar from "../HomePage/Navbar/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact">
                <div class="team-section">
                    <h2>Our Team</h2>
                    <div class="team-container">
                        <div class="team-member">
                            <div class="img-container">
                                <div className="co-img1"></div>
                            </div>
                            <h3>Khush Kataruka</h3>
                            <p>Team leader</p>
                            <p>Subscribe Cosmic Voyage</p>
                        </div>
                        <div class="team-member">
                            <div class="img-container">
                                <div className="co-img2"></div>
                            </div>
                            <h3>Makam Lokesh</h3>
                            <p>Business Head</p>
                            <p>Subscribe Cosmic Voyage</p>
                        </div>
                        <div class="team-member">
                            <div class="img-container">
                                <div className="co-img3"></div>
                            </div>
                            <h3>Mohammad Muzammil</h3>
                            <p>Marketing Head</p>
                            <p>Subscribe Cosmic Voyage</p>
                        </div>
                        <div class="team-member">
                            <div class="img-container">
                                <div className="co-img4"></div>
                            </div>
                            <h3>Sahil Nagwani</h3>
                            <p>UI Design</p>
                            <p>Subscribe Cosmic Voyage</p>
                        </div>
                    </div>
                </div>

                <section class="contact-hero">
                    <div class="contact-hero-content">
                        <h2>Get in Touch</h2>
                        <p>We'd love to hear from you. Whether you have questions, feedback, or just want to connect, reach out
                            to us!</p>
                    </div>
                </section>

                <section class="contact-form">
                    <div class="c-container">
                        <div class="form-content">
                            <h2>Contact Us</h2>
                            <form action="submit_form.php" method="post">
                                <div class="form-group">
                                    <label for="c-name">Name</label>
                                    <input type="text" id="c-name" name="name" required></input>
                                </div>
                                <div class="form-group">
                                    <label for="c-email">Email</label>
                                    <input type="email" id="c-email" name="email" required></input>
                                </div>
                                <div class="form-group">
                                    <label for="c-message">Message</label>
                                    <textarea id="c-message" name="message" rows="5" required></textarea>
                                </div>
                                <button type="submit" class="submit-btn">Send Message</button>
                            </form>
                        </div>
                        <div class="contact-info">
                            <h3>Contact Information</h3>
                            <p><strong>Email:</strong> contact@cosmicvoyage.com</p>
                            <p><strong>Phone:</strong> +1 234 567 890</p>
                            <p><strong>Address:</strong> Ichchhanath Surat- Dumas, Road, Keval Chowk, Surat, Gujarat 395007</p>
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29764.482969729823!2d72.7778405!3d21.169887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec8b56fdf3%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1721561248178!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Contact