import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface pt-[110px] pb-24 sm:pt-[120px] sm:pb-32 lg:pt-[136px] lg:pb-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.08),_transparent_28%)]" />
      </div>

      <div className="section-shell">
        <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-eyebrow">{profile.badge}</span>

          <div className="hero-hi">Hi, I'm</div>
          <h1 className="hero-name ty-hero-name">{profile.name}</h1>

          <div className="hero-role">
            IT Coordinator <span className="mx-2 text-slate-400">|</span>
            IT Infrastructure Engineer <span className="mx-2 text-slate-400">|</span>
            Network &amp; Server Administrator
          </div>

          <p className="hero-desc">
            I specialize in designing, implementing, and maintaining secure, reliable IT infrastructure that enables organizations to operate efficiently. I enjoy solving technical challenges, optimizing enterprise systems, and delivering dependable technology solutions.
          </p>

          <div className="hero-buttons">
            <a href={profile.resumeUrl} download className="btn-equal bg-blue-600 text-white" style={{display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
              <Download />
              <span>Download Resume</span>
            </a>
            <a href="#projects" className="btn-equal border border-slate-200 text-slate-700">
              <ArrowRight />
              <span>View Projects</span>
            </a>
            <a href="#contact" className="btn-equal text-blue-600 bg-white border border-slate-200">
              <Mail />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="social-row">
            <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2.2c.9-1.6 3-2.4 4.9-2.4zM2 9h4v12h-4zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/></svg>
            </a>
            <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.93.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor"/></svg>
            </a>
            <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1" fill="none"/><path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="1.2"/></svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl w-[420px] h-[420px] -z-10" />

          <div className="flex flex-col items-center">
            <div className="profile-frame h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] animate-float" style={{ animationDuration: "6s" }}>
              <img src={profile.profileImage} alt={profile.name} className="profile-img" />
              <div className="profile-accent" />
            </div>

            <div className="profile-card w-[75%] sm:w-[75%] mt-5 -translate-y-3 mx-auto">
              <div className="flex items-center justify-center gap-3">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <div className="text-xs uppercase font-medium text-slate-500">Currently Working</div>
              </div>

              <div className="mt-2 text-lg font-bold text-slate-900">{profile.currentTitle}</div>
              <div className="mt-1 text-sm font-medium text-slate-600">{profile.currentCompany}</div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
