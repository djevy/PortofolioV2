import React, { useState, useRef } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const [confirmLoading, setConfirmLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
    }, 2000);
    emailjs
      .sendForm(
        "Email from Darrenrevans",
        "template_4d687l3",
        form.current,
        "user_waq5Ii9uVZSpVEiDZ8TGu"
      )
      .then((result) => {
          console.log("form current: ", form.current)
        setSent({
          mailSent: true,
        });
        console.log(result.text);
      })
      .catch((error) => console.log(error.text));
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <p>
        Please feel free to contact me with any business or career related
        enquiries.
      </p>
      <form ref={form} id="contactForm" onSubmit={sendEmail}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="firstname"
            placeholder="Your first name.."
            required
          />
        </div>

        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="example@email.co.uk"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            className="form-control"
            name="message"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>
        <input
          type="submit"
          id="submitBtn"
          className="btn btn-primary"
          disabled={confirmLoading}
          value="Submit"
        />

        <div id="thankYou">
          {sent && <div>Thank you for contacting me!</div>}
        </div>
      </form>
    </section>
  );
};
