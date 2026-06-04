const Projects = () => {
  const projects = [
    {
      title: "Medical AI Suite & Clinical Trial Matcher",
      period: "2026",
      tech: "LangGraph, LangChain, Groq, Streamlit, PyPDF, REST APIs",
      description: [
        "Engineered an AI-driven healthcare platform using LangGraph and Groq (Llama 3.1) to autonomously match patient profiles against the ClinicalTrials.gov API, analyzing up to 20 actively recruiting trials in under 5 seconds.",
        "Developed an automated PDF extraction pipeline utilizing PyPDF and LangChain, successfully structuring 10,000+ character unstructured medical reports into actionable JSON datasets mapping 15+ key biomarkers.",
        "Deployed a responsive Streamlit dashboard with geographic filtering and plain-English summaries, reducing manual clinical screening time by over 90% while achieving sub-3-second LLM inference speeds."
      ],
      link: "https://clinical-trial-screener-divyansh.streamlit.app/",
      github: "https://github.com/oldregime/clinical-trial-screener"
    },
    {
      title: "IoT Remote Access & Private Cloud Controller",
      period: "2025",
      tech: "C++, PlatformIO, ESP32, Python, REST APIs, HTTPS, LittleFS, WoL",
      description: [
        "Engineered a secure IoT gateway using ESP32 (C++/PlatformIO) and Telegram Bot API to trigger remote Wake-on-LAN (WoL) magic packets, eliminating the need to expose management ports (SSH/IPMI) to the public internet.",
        "Integrated TrueNAS REST API client over secure HTTPS to execute authenticated ACPI shutdown and reboot actions, and implemented a custom cron-like task scheduler that persists state across reboots using LittleFS flash storage.",
        "Developed a companion Python network scanning utility to auto-discover active hosts, map MAC/IP address tables, and dynamically sync configurations back to the microcontroller over the local subnet."
      ],
      link: "https://github.com/oldregime/esp32-wake-on-lan-telegram",
      github: "https://github.com/oldregime/esp32-wake-on-lan-telegram"
    },
    {
      title: "GradeWise - AI Powered Grading Tool",
      period: "2024-2025",
      tech: "Next.js, React, Tailwind CSS, Genkit, Google Cloud Platform",
      description: [
        "Developed a full-stack web application to automate student paper grading using AI, significantly reducing grading time for educators.",
        "Implemented AI flows for extracting questions, generating feedback, and scoring similarity, leveraging Genkit and Google Cloud Platform for scalability and reliability.",
        "Designed a user-friendly interface with Next.js and Tailwind CSS, providing a seamless experience for teachers to upload papers, review grades, and provide final feedback."
      ],
      link: "https://github.com/oldregime/GradeWise",
      github: "https://github.com/oldregime/GradeWise"
    },
    {
      title: "NAS Server Development",
      period: "Dec 2024 – May 2025",
      tech: "Proxmox, TrueNAS, ZFS, Python, Cloudflare Tunnels",
      description: [
        "Architected a highly available TrueNAS ecosystem on Proxmox utilizing ZFS RAID and a 3-2-1-1 backup strategy, achieving 99.9% data availability.",
        "Engineered automated Python workflows leveraging the TrueNAS REST API to provision containerized apps (Nextcloud, n8n), audit NFSv4 permissions, and monitor system health.",
        "Established secure zero-trust network access and automated offsite replication using Cloudflare Tunnels and Tailscale for 15+ concurrent users."
      ],
      link: "https://github.com/oldregime/NAS-Server-Development-2024",
      github: "https://github.com/oldregime/NAS-Server-Development-2024"
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl mb-4 text-terminal-cyan">Projects</h1>
        <p className="text-muted-foreground mb-8">
          A collection of my technical projects spanning full-stack development, 
          machine learning, and infrastructure.
        </p>
      </section>

      <section className="space-y-12">
        {projects.map((project, index) => (
          <article key={index} className="border-l-2 border-primary pl-6">
            <div className="mb-4">
              <h2 className="text-xl mb-2 flex items-center gap-3 flex-wrap">
                {project.link && project.link !== project.github ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-terminal-cyan transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span>{project.title}</span>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-terminal-cyan transition-colors"
                    title="View Source on GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                )}
              </h2>
              <div className="flex gap-4 text-sm">
                <span className="text-terminal-yellow">{project.period}</span>
                <span className="text-muted-foreground">{project.tech}</span>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              {project.description.map((item, itemIndex) => (
                <li key={itemIndex} className="leading-relaxed">
                  - {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Projects;
