import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconGlobe,
  IconSend,
  SocialIcon,
} from "./Icons";
import { socials, contactDetails } from "../data/socials";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setSent(false);
  };

  // No backend wired up — hand the message to the user's mail client.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Portfolio enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="wrap">
        <SectionTitle watermark="CONTACT">
          GET IN <span>TOUCH</span>
        </SectionTitle>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-heading">
              DON'T BE <span>SHY!</span>
            </div>

            <p className="contact-p">
              Feel free to reach out for freelance work, full-time roles, or
              just to talk mobile development. I usually respond within 24
              hours.
            </p>

            <div className="contact-item">
              <div className="ic">
                <IconMapPin />
              </div>
              <div>
                <b>Address</b>
                <span>{contactDetails.address}</span>
              </div>
            </div>

            <a className="contact-item" href={`mailto:${contactDetails.email}`}>
              <div className="ic">
                <IconMail />
              </div>
              <div>
                <b>Email</b>
                <span>{contactDetails.email}</span>
              </div>
            </a>

            <a
              className="contact-item"
              href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
            >
              <div className="ic">
                <IconPhone />
              </div>
              <div>
                <b>Phone</b>
                <span>{contactDetails.phone}</span>
              </div>
            </a>

            {/* <a
              className="contact-item"
              href={contactDetails.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              <div className="ic">
                <IconGlobe />
              </div>
              <div>
                <b>Website</b>
                <span>{contactDetails.website}</span>
              </div>
            </a> */}

            {/* <div className="contact-socials">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <SocialIcon social={social} />
                </a>
              ))}
            </div> */}
          </Reveal>

          <Reveal as="form" className="contact-form" onSubmit={handleSubmit} index={1}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={update("name")}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={update("email")}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={update("subject")}
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={update("message")}
              required
            />

            <button type="submit" className="btn-yellow">
              Send Message
              <IconSend />
            </button>

            {sent && (
              <p className="form-note">
                Your mail app should be open — hit send there and it's on its
                way.
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
