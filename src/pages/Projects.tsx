const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Tracker (MERN Stack)",
      period: "2024-2025",
      tech: "MongoDB, Express.js, React, Node.js, JWT, OAuth",
      description: [
        "Built a comprehensive personal finance management application with the MERN stack featuring secure user authentication with JWT and OAuth (Google, Facebook).",
        "Implemented expense tracking, income management, and budget planning features with category-wise organization and monthly budget monitoring.",
        "Designed interactive data visualization with charts and reports to analyze spending habits and financial progress across devices.",
        "Deployed full-stack application with MongoDB database, Express.js backend API, and React frontend on Vercel.",
      ],
      link: "https://merntracker.vercel.app/",
    },
    {
      title: "GradeWise - AI Powered Grading Tool",
      period: "2024-2025",
      tech: "Next.js, React, Tailwind CSS, Genkit, Google Cloud Platform",
      description: [
        "Developed a full-stack web application to automate student paper grading using AI, significantly reducing grading time for educators.",
        "Implemented AI flows for extracting questions, generating feedback, and scoring similarity, leveraging Genkit and Google Cloud Platform for scalability and reliability.",
        "Designed a user-friendly interface with Next.js and Tailwind CSS, providing a seamless experience for teachers to upload papers, review grades, and provide final feedback.",
      ],
      link: "https://github.com/oldregime/VitGrader",
    },
    {
      title: "File Management System Architecture",
      period: "2025",
      tech: "Hybrid PARA + GTD + Johnny Decimal System",
      description: [
        "Designed comprehensive digital organization framework using hierarchical folder structure with Scientific methodology for enhanced productivity.",
        "Implemented standardized naming convention with universal type codes for consistent file identification across project files.",
        "Established automated categorization system reducing file retrieval time by 60% through structured libraries and development tools organization.",
        "Created scalable template library with version control integration supporting collaborative development workflows.",
      ],
      link: "https://github.com/oldregime/FileStructureUbuntu",
    },
    {
      title: "Fraudulent App Detection Using NLP",
      period: "2024",
      tech: "Machine Learning + Data Manipulation",
      description: [
        "Developed a machine learning model achieving 85% accuracy in detecting fraudulent apps based on a dataset of over 1,000 user reviews using NLP techniques.",
        "Integrated preprocessing pipelines for text data cleaning and vectorization, improving model F1-score by 0.05 through enhanced techniques.",
      ],
    },
    {
      title: "NAS Server Development",
      period: "2024",
      tech: "Personal Project",
      description: [
        "Deployed NAS server using Proxmox with RAID storage and mechanized backup, ensuring 99.9% data availability.",
        "Deployed SSH tunnel for secure remote access with encryption mechanisms, for 15+ primary users.",
        "Optimized performance through RAID configuration and monitoring tools, achieving approximately 20% faster file transfer speeds for large datasets.",
      ],
      link: "https://github.com/oldregime/NAS-Server-Development-2024",
    },
    {
      title: "Web Development Projects",
      period: "2023-2024",
      tech: "HTML/CSS/JS/React",
      description: [
        "Built a full-stack MERN application for personal task and progress tracking. (MERN-Expense Tracker)",
        "Created an E-Commerce platform website to showcase projects and skills using HTML/CSS and JavaScript. (VITT)",
        "Designed and deployed a professional web presence for LNJ Corp Sol. (lnjoshics.co.in)",
        "Built a web-based tax calculation utility using JavaScript for simplified tax estimations. (NeonTAX)",
      ],
    },
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
              <h2 className="text-xl mb-2">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-terminal-cyan transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
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
