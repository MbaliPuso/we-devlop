"use client";
import { contactItems } from "@/data/contact";
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Create a new FormData object
     const formDataToSend = new FormData();

     // Append text fields to FormData
     for (const key in formData) {
       formDataToSend.append(key, formData[key]);
     }

    try {
      const response = await fetch(
        "https://demos.kickass.co.za/finery/form/formHandler.php",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        // Handle success, e.g., show a success message
        setShowModal(true);
        // You might want to redirect the user or display a success message
      } else {
        // Handle error, e.g., show an error message
        setShowModal(false);
      }
    } catch (error) {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
      setShowModal(false);

  };

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">Contact Us</h2>
          <h3 className="section-title mb-50 mb-sm-30">
            We’re open to talk to good people.
          </h3>
          {/* Contact Information */}
          <div className="row">
            <div className="col-md-11">
              {/* Address */}

              {contactItems.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`contact-item ${
                      index !== 3 ? "mb-40 mb-sm-20" : ""
                    }`}
                  >
                    <div className="ci-icon">
                      <i className={item.iconClass} />
                    </div>
                    <h4 className="ci-title  visually-hidden">{item.title}</h4>
                    <div className="ci-text">{item.text}</div>
                    <div>
                      <a
                        href={item.link.url}
                        target={item.link.target}
                        rel={item.link.rel}
                        className="link-hover-anim"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          {item.link.text}{" "}
                          <i
                            className="mi-arrow-right size-18"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          {item.link.text}{" "}
                          <i
                            className="mi-arrow-right size-18"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              {/* End Phone */}
            </div>
          </div>
          {/* End Contact Information */}
        </div>
        {/* End Left Column */}
        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1">
          <div className="position-relative">
            {/* Decorative Image */}
            {/* <div className="decoration-11 d-none d-xl-block">
              <div className="wow fadeInUp">
                <Image
                  src="/assets/images/demo-fancy/contact-section-image.png"
                  width={225}
                  height={250}
                  alt=""
                />
              </div>
            </div> */}
            {/* End Decorative Image */}
            <div className="box-shadow round p-4 p-sm-5">
              <h4 className="h3 mb-30">Get in Touch</h4>
              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="form contact-form"
                id="contact_form"
              >
                <div className="row">
                  <div className="col-md-6">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-lg round form-control"
                        placeholder="Enter your name"
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    {/* End Name */}
                  </div>
                  <div className="col-md-6">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-lg round form-control"
                        placeholder="Enter your email"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {/* End Email */}
                  </div>
                </div>
                <div className="form-group">
                      <label htmlFor="contact">Contact Number</label>
                      <input
                        type="number"
                        name="contactNumber"
                        id="contactNumber"
                        className="input-lg round form-control"
                        placeholder="Enter your contact number"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                        value={formData.contactNumber}
                        onChange={handleChange}
                      />
                    </div>
                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="input-lg round form-control"
                    style={{ height: 130 }}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    {/* Send Button */}
                    <div className="pt-3">
                      <button
                        className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                        id="submit_btn"
                        aria-controls="result"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                    {/* End Send Button */}
                  </div>
                  <div className="col-md-6 col-xl-7 d-flex align-items-center">
                    {/* Inform Tip */}
                    <div className="form-tip w-100 pt-3 mt-sm-20">
                      <i className="icon-info size-16" />
                      All the fields are required. By sending the form you agree
                      to the <a href="#">Terms &amp; Conditions</a> and{" "}
                      <a href="#">Privacy Policy</a>.
                    </div>
                    {/* End Inform Tip */}
                  </div>
                </div>
                <div
                  id="result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                />
              </form>
              {/* End Contact Form */}
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#9EBFFF' }}>
                </Modal.Header>
                <Modal.Body className="text-center" style={{ backgroundColor: '#9EBFFF' }}>
                  <p>
                    <i className="bi bi-envelope"></i>
                  </p>
                  <p>Thank you for contacting WeDevelop</p>
                  <p>We'll contact you soon.</p>
                </Modal.Body>
              </Modal>
              {/* Bootstrap Modal End */}
            </div>
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </div>
  );
}
