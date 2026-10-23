import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  ShoppingBag,
  Gauge,
  Accessibility,
} from "lucide-react";

const projects = [
  {
    name: "Da Kine Hawaiian",
    type: "SHOPIFY · ECOMMERCE",
    description:
      "Served as the web developer and project manager for the client, coordinating the work while building and maintaining the Shopify storefront.",
    url: "https://www.dakinehawaiian.net/",
    featured: true,
  },
  {
    name: "SkinSutra",
    type: "SHOPIFY · SKINCARE",
    description:
      "Main developer for the Shopify skincare storefront, handling the core website development and ongoing store improvements.",
    url: "https://skinsutra.com/",
    featured: true,
  },
  {
    name: "Mental Skin Care",
    type: "SHOPIFY · SKINCARE",
    description:
      "Main developer for the Shopify store, also handling ongoing SEO updates and product content optimization to support the store's online visibility.",
    url: "https://mentalskincare.com/",
    featured: true,
  },
  {
    name: "Berger Steel",
    type: "WORDPRESS · WEBSITE",
    description:
      "Website and portfolio presentation work, including project content and responsive interface refinements.",
    url: "https://bergersteel.com/",
    featured: false,
  },
  {
    name: "The Barrie Company",
    type: "WORDPRESS · PROJECT ARCHIVE",
    description:
      "Worked with a commercial construction project archive covering multiple project types and industries.",
    url: "https://thebarriecompany.com/project/",
    featured: false,
  },
];

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify & eCommerce",
    text: "Theme customization, Liquid sections, storefront UX, responsive fixes, and store troubleshooting.",
  },
  {
    icon: Code2,
    title: "WordPress Development",
    text: "Elementor builds, custom HTML/CSS/JS, content layouts, and practical site improvements.",
  },
  {
    icon: Gauge,
    title: "SEO & Performance",
    text: "Technical SEO, speed audits, image optimization, and measurable site improvements.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "WAVE and axe-based audits, semantic structure, keyboard checks, and WCAG-informed fixes.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav shell">
        <a className="brand" href="#top">
          PORTFOLIO<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">What I do</a>
          <a href="#about">About</a>

          <a className="nav-cta" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> AVAILABLE FOR WEB PROJECTS
          </p>

          <h1>
            Thoughtful websites.
            <br />
            <em>Better</em> digital experiences.
          </h1>

          <p className="hero-text">
            I’m a web developer focused on Shopify, WordPress, and eCommerce
            experiences—bringing together clean implementation, responsive
            design, SEO, and accessibility.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a className="text-link" href="#contact">
              Get in touch <span>↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>SHOPIFY / WORDPRESS / SEO</span>
            <span>PHILIPPINES · WORKING WORLDWIDE</span>
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Abstract geometric portfolio artwork"
        >
          <div className="art-grid"></div>

          <div className="art-card art-card-one">
            <span>01</span>
            <b>Build</b>
            <small>with purpose</small>
          </div>

          <div className="art-card art-card-two">
            <span>02</span>
            <b>Refine</b>
            <small>every detail</small>
          </div>

          <div className="art-circle"></div>

          <div className="art-label">
            DIGITAL
            <br />
            CRAFT / 2026
          </div>
        </div>
      </section>

      {/* Expertise ticker */}
      <section className="ticker" aria-label="Areas of expertise">
        <div>
          SHOPIFY THEMES <span>✳</span> WORDPRESS <span>✳</span> ECOMMERCE{" "}
          <span>✳</span> SEO & PERFORMANCE <span>✳</span> ACCESSIBILITY{" "}
          <span>✳</span> SHOPIFY THEMES <span>✳</span> WORDPRESS <span>✳</span>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED PROJECTS</p>

            <h2>
              Work that makes
              <br />
              the web work better.
            </h2>
          </div>

          <p className="section-intro">
            A selection of website, eCommerce, and optimization work. Project
            descriptions can be expanded with exact store URLs, screenshots,
            and outcomes.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, i) => (
            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.name}
            >
              <div className={`project-visual visual-${i + 1}`}>
                <div className="visual-window">
                  <div className="window-bar">
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>{project.type}</span>
                  </div>

                  <div className="window-content">
                    <div className="window-line"></div>
                    <div className="window-block"></div>
                    <div className="window-line short"></div>
                    <div className="window-pill"></div>
                  </div>
                </div>

                <span className="project-number">0{i + 1}</span>
              </div>

              <div className="project-info">
                <div>
                  <p className="project-type">{project.type}</p>

                  <h3>{project.name}</h3>

                  <p className="project-desc">{project.description}</p>
                </div>

                {project.url ? (
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                ) : (
                  <span
                    className="project-link pending"
                    title="URL to be added"
                  >
                    <ArrowUpRight size={20} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section">
        <div className="shell">
          <div className="section-heading light-heading">
            <div>
              <p className="eyebrow">HOW I CAN HELP</p>

              <h2>
                From storefront to
                <br />
                site speed.
              </h2>
            </div>

            <p className="section-intro">
              Practical development and thoughtful improvements that help
              businesses create a stronger online presence.
            </p>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, i) => (
              <article className="service" key={title}>
                <div className="service-top">
                  <span>0{i + 1}</span>
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section shell">
        <div className="about-mark">
          JD<span>.</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>

          <h2>
            Developer by craft.
            <br />
            <em>Problem-solver</em> by nature.
          </h2>

          <p>
            I work across web development and digital optimization, with
            hands-on experience in Shopify and WordPress, technical SEO, and
            accessibility improvements. I enjoy turning messy requirements into
            clear, usable experiences—and collaborating with teams to ship work
            that lasts.
          </p>

          <div className="about-tags">
            <span>Shopify / Liquid</span>
            <span>WordPress / Elementor</span>
            <span>HTML / CSS / JavaScript</span>
            <span>SEO / Accessibility</span>
            <span>React / Next.js</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

          <h2>
            Let’s make something
            <br />
            <em>useful</em> together.
          </h2>

          <a
            className="button button-light"
            href="mailto:your.email@example.com"
          >
            Email me <Mail size={17} />
          </a>

          <div className="contact-bottom">
            <span>© 2026 YOUR NAME. BUILT WITH CARE.</span>

            <div>
              <a href="#" aria-label="GitHub">
                <Github size={17} />
              </a>

              <a href="#" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
