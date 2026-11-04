import { useState, type FormEvent } from 'react';
import { portfolio } from '../data/portfolio';
import { Button } from './Button';
import styles from './ContactForm.module.scss';

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  // No backend: hands the message to the visitor's email app.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio message from ${data.get('name')}`;
    const body = `${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`;
    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={6} required />
      </div>
      <Button type="submit">Open in Email App</Button>
      <p className={styles.status} role="status">
        {opened &&
          `Your email app should open with this message. If it doesn't, write to ${portfolio.email}.`}
      </p>
    </form>
  );
}
