const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Download Button */}
      <div className="flex justify-end mb-4">
        <a
          href="/resume.pdf"
          download="Divyansh_Joshi_Resume.pdf"
          className="text-sm px-4 py-2 border border-terminal-yellow text-terminal-yellow hover:bg-terminal-yellow/10 transition-colors rounded flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </a>
      </div>

      {/* Header */}
      <div className="text-center space-y-2 pb-6 border-b border-border">
        <h1 className="text-4xl font-bold text-terminal-cyan">Divyansh Joshi</h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>+91-89624-30535</span>
          <span>|</span>
          <a href="mailto:divyansh8065@gmail.com" className="hover:text-terminal-yellow">
            divyansh8065@gmail.com
          </a>
          <span>|</span>
          <a 
            href="https://www.linkedin.com/in/theoldregime/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-terminal-yellow"
          >
            linkedin.com/in/theoldregime
          </a>
          <span>|</span>
          <a 
            href="https://github.com/oldregime" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-terminal-yellow"
          >
            github.com/oldregime
          </a>
        </div>
      </div>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-terminal-cyan border-b border-primary pb-2">
          Education
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">B.Tech, Computer Science Engineering</h3>
              <p className="text-muted-foreground">Vellore Institute of Technology</p>
            </div>
            <span className="text-terminal-yellow">Expected 2026</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Class XII, CBSE (76%)</h3>
              <p className="text-muted-foreground">Choithram School, Indore</p>
            </div>
            <span className="text-terminal-yellow">2022</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Class X, CBSE (76%)</h3>
              <p className="text-muted-foreground">Choithram School, Indore</p>
            </div>
            <span className="text-terminal-yellow">2020</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-terminal-cyan border-b border-primary pb-2">
          Experience
        </h2>
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">NAS Server Development</h3>
              <p className="text-muted-foreground">Personal Project</p>
            </div>
            <span className="text-terminal-yellow">2024</span>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Deployed NAS server using Proxmox with RAID storage and mechanized backup, ensuring 99.9% data availability.</li>
            <li>Deployed SSH tunnel for secure remote access with encryption mechanisms, for 15+ primary users.</li>
            <li>Optimized performance through RAID configuration and monitoring tools, achieving approximately 20% faster file transfer speeds for large datasets.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-terminal-cyan border-b border-primary pb-2">
          Projects
        </h2>
        <div className="space-y-6">
          {/* GradeWise */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">GradeWise - AI Powered Grading Tool</h3>
                <p className="text-muted-foreground text-sm">Next.js, React, Tailwind CSS, Genkit, Google Cloud Platform</p>
              </div>
              <span className="text-terminal-yellow">2024-2025</span>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Developed a full-stack web application to automate student paper grading using AI, significantly reducing grading time for educators.</li>
              <li>Implemented AI flows for extracting questions, generating feedback, and scoring similarity, leveraging Genkit and Google Cloud Platform for scalability and reliability.</li>
              <li>Designed a user-friendly interface with Next.js and Tailwind CSS, providing a seamless experience for teachers to upload papers, review grades, and provide final feedback.</li>
            </ul>
          </div>

          {/* File Management */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">File Management System Architecture</h3>
                <p className="text-muted-foreground text-sm">Hybrid PARA + GTD + Johnny Decimal System</p>
              </div>
              <span className="text-terminal-yellow">2025</span>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Designed comprehensive digital organization framework using hierarchical folder structure with Scientific methodology for enhanced productivity.</li>
              <li>Implemented standardized naming convention with universal type codes for consistent file identification across project files.</li>
              <li>Established automated categorization system reducing file retrieval time by 60% through structured libraries and development tools organization.</li>
              <li>Created scalable template library with version control integration supporting collaborative development workflows.</li>
            </ul>
          </div>

          {/* Fraudulent App Detection */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">Fraudulent App Detection Using NLP</h3>
                <p className="text-muted-foreground text-sm">Machine Learning + Data Manipulation</p>
              </div>
              <span className="text-terminal-yellow">2024</span>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Developed a machine learning model achieving 85% accuracy in detecting fraudulent apps based on a dataset of over 1,000 user reviews using NLP techniques.</li>
              <li>Integrated preprocessing pipelines for text data cleaning and vectorization, improving model F1-score by 0.05 through enhanced techniques.</li>
            </ul>
          </div>

          {/* Web Development Projects */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">Web Development Projects</h3>
                <p className="text-muted-foreground text-sm">HTML/CSS/JS/React</p>
              </div>
              <span className="text-terminal-yellow">2023-2024</span>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Built a full-stack MERN application for personal task and progress tracking. (<a href="https://github.com/oldregime/MERN_Tracker" target="_blank" rel="noopener noreferrer" className="text-terminal-yellow hover:underline">MERN-Expense Tracker</a>)</li>
              <li>Created an E-Commerce platform website to showcase projects and skills using HTML/CSS and JavaScript. (<a href="https://github.com/oldregime/oldregime.github.io" target="_blank" rel="noopener noreferrer" className="text-terminal-yellow hover:underline">VITT</a>)</li>
              <li>Designed and deployed a professional web presence for LNJ Corp Sol. (<a href="http://lnjoshics.co.in" target="_blank" rel="noopener noreferrer" className="text-terminal-yellow hover:underline">lnjoshics.co.in</a>)</li>
              <li>Built a web-based tax calculation utility using JavaScript for simplified tax estimations. (<a href="https://github.com/oldregime/NeonTAX" target="_blank" rel="noopener noreferrer" className="text-terminal-yellow hover:underline">NeonTAX</a>)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-terminal-cyan border-b border-primary pb-2">
          Technical Skills
        </h2>
        <div className="space-y-2 text-muted-foreground">
          <p><strong className="text-foreground">Languages:</strong> Java, Python (Pandas, Matplotlib), Basic MERN, Data Visualization</p>
          <p><strong className="text-foreground">Testing & Automation:</strong> Selenium WebDriver, LambdaTest, Jenkins</p>
          <p><strong className="text-foreground">Cloud & DevOps:</strong> Firebase, Amazon Web Services, Docker, Git, CloudFlare</p>
          <p><strong className="text-foreground">Databases:</strong> MySQL, MongoDB, Supabase</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
