import type { FC } from "react";
import styles from "./ContactForm.module.css";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  return (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="title"
      >
        <p className={styles.hidden}>
          <label>
            Your title <input name="title" />
          </label>
        </p>
        <div>
          <label>
            <span>Your Name:</span>
            <input type="text" name="name" required />
          </label>
        </div>
        <div>
          <label>
            <span>Your Email:</span>
            <input type="email" name="email" required />
          </label>
        </div>
        <div>
          <label>
            <span>Message:</span>
            <textarea name="message" required></textarea>
          </label>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
