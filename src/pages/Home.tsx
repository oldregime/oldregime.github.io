const Home = () => {
  const projects = [
    {
      date: "2024-2025",
      title: "Bitcoin Signet Monitoring Stack",
      description: "Production-ready monitoring solution for Bitcoin Signet nodes using LGTM Stack (Loki, Grafana, Tempo, Mimir) with automated deployment, real-time alerting, and <1s log processing latency.",
      tags: ["LGTM Stack", "Docker", "Ansible", "Bitcoin", "DevOps"],
      link: "https://github.com/oldregime/luganode2025",
    },
    {
      date: "2024-2025",
      title: "Personal Finance Tracker (MERN Stack)",
      description: "A comprehensive personal finance management application built with the MERN stack. Track expenses, manage income, set budgets, and visualize financial progress with interactive charts and reports.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      link: "https://merntracker.vercel.app/",
    },
    {
      date: "2024-2025",
      title: "GradeWise - AI Powered Grading Tool",
      description: "Developed a full-stack web application to automate student paper grading using AI, significantly reducing grading time for educators.",
      tags: ["Next.js", "React", "AI", "GCP"],
      link: "https://github.com/oldregime/VitGrader",
    },
    {
      date: "2025",
      title: "File Management System Architecture",
      description: "Designed comprehensive digital organization framework using hierarchical folder structure with Scientific methodology for enhanced productivity.",
      tags: ["Architecture", "System Design"],
      link: "https://github.com/oldregime/FileStructureUbuntu",
    },
    {
      date: "2024",
      title: "Fraudulent App Detection Using NLP",
      description: "Developed a machine learning model achieving 85% accuracy in detecting fraudulent apps based on a dataset of over 1,000 user reviews.",
      tags: ["Machine Learning", "NLP", "Python"],
    },
    {
      date: "2024",
      title: "NAS Server Development",
      description: "Deployed NAS server using Proxmox with RAID storage and mechanized backup, ensuring 99.9% data availability.",
      tags: ["DevOps", "Infrastructure"],
      link: "https://github.com/oldregime/NAS-Server-Development-2024",
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="mb-6 font-mono text-sm">
          <span className="text-terminal-green">divyansh@portfolio</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-terminal-cyan">~</span>
          <span className="text-muted-foreground">$ </span>
          <span className="text-foreground">pwd</span>
          <div className="text-terminal-yellow">/home/divyansh/portfolio</div>
        </div>
        <p className="text-muted-foreground mb-8">
          Computer Science student at VIT Bhopal. Interested in full-stack development, 
          machine learning, and system architecture.
        </p>
      </section>

      <section>
        <h2 className="text-xl mb-8 text-terminal-cyan">Recent Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={index} className="group">
              <time className="text-sm text-muted-foreground block mb-2">
                {project.date}
              </time>
              <h3 className="text-lg mb-2">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary group-hover:underline cursor-pointer"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="text-primary">
                    {project.title}
                  </span>
                )}
              </h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-secondary text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
