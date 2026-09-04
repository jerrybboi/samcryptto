"use client";

import { FormEvent, useState } from "react";
import styles from "./contact.module.css";

const serviceOptions = [
  "Content Writing",
  "Ghostwriting",
  "Narrative & Brand Voice",
  "Community Content & Support",
  "X Space Hosting",
  "Research & Project Support",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          project: formData.get("project"),
          service: formData.get("service"),
          message: formData.get("message"),
          companyWebsite: formData.get("companyWebsite"),
        }),
      });

      if (!response.ok) {
        throw new Error("Inquiry request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.inquirySection} aria-labelledby="inquiry-title">
      <div className={styles.inquiryInner}>
        <div className={styles.inquiryPanel}>
          <p className={styles.sectionLabel}>START A PROJECT INQUIRY</p>

          <form className={styles.inquiryForm} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <label className={styles.field}>
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" maxLength={120} required />
              </label>

              <label className={styles.field}>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" maxLength={254} required />
              </label>

              <label className={styles.field}>
                <span>Project / Brand</span>
                <input name="project" type="text" maxLength={160} required />
              </label>

              <label className={styles.field}>
                <span>What do you need?</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled hidden />
                  {serviceOptions.map((service) => (
                    <option value={service} key={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className={`${styles.field} ${styles.messageField}`}>
              <span>Tell Sammy about your project</span>
              <textarea name="message" rows={7} maxLength={5000} required />
            </label>

            <div className={styles.honeypot} aria-hidden="true">
              <input
                name="companyWebsite"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className={styles.formActions}>
              <button
                className="primary-button"
                type="submit"
                disabled={status === "submitting"}
                aria-busy={status === "submitting"}
              >
                SEND INQUIRY →
              </button>
              <a
                className={styles.telegramFallback}
                href="https://t.me/sammygrace110"
                target="_blank"
                rel="noreferrer"
              >
                MESSAGE ON TELEGRAM ↗
              </a>
            </div>

            <div className={styles.formStatus} aria-live="polite">
              {status === "success" ? (
                <>
                  <strong>INQUIRY SENT</strong>
                  <p>Thanks. Sammy will get back to you through the contact details you provided.</p>
                </>
              ) : null}

              {status === "error" ? (
                <>
                  <strong>SOMETHING WENT WRONG</strong>
                  <p>Your inquiry could not be sent. Please try again or message Sammy on Telegram.</p>
                </>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
