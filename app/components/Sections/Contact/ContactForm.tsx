"use client";

import { useRef } from "react";
import styles from "./contact.module.css";
import axios from "axios";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value,
    }

    // validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const url = "/api/sendMail";
      const body = formData;
      
      // send data to the server
      // console.log("formData: ", formData);

      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        }
      })

      console.log("response: ", response);
      if (response.status === 200) {
        alert("Email sent");
      }
    } catch (error) {
      console.log("error: ", error);
    } finally {
      // Clear the form
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      subjectRef.current!.value = "";
      messageRef.current!.value = "";
    }
  };

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit}>
        <div className={styles.nameEmail}>
          <input ref={nameRef} type="text" placeholder="Full name" className={styles.input} />
          <input ref={emailRef} type="email" placeholder="Email" className={styles.input} />
        </div>
        <input ref={subjectRef} type="text" placeholder="Subject" className={styles.input} />
        <div>
          <textarea ref={messageRef} placeholder="Message" rows={3} className={styles.input} ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;