import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  { icon: Linkedin, label: "LinkedIn", value: "View Profile", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "View Profile", href: profile.github },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface-alt py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s Connect"
          description="I'm always open to professional conversations, networking opportunities, and meaningful discussions about enterprise IT, infrastructure, and technology."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="card-surface flex min-h-[88px] items-center gap-4 p-5 transition-shadow hover:shadow-soft-lg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="card-glass p-7 sm:p-8 lg:p-9"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <CheckCircle2 size={28} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                  Thanks for reaching out — I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500"
                    placeholder="Tell me about the role or project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
