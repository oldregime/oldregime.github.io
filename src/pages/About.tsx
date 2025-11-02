import profileImage from "@/assets/profile-ascii.jpg";

const About = () => {
  const skills = {
    "Languages": ["Java", "Python (Pandas, Matplotlib)", "JavaScript", "MERN Stack"],
    "Testing & Automation": ["Selenium WebDriver", "LambdaTest", "Jenkins"],
    "Cloud & DevOps": ["Firebase", "AWS", "Docker", "Git", "CloudFlare"],
    "Databases": ["MySQL", "MongoDB", "Supabase"],
  };

  const education = [
    {
      degree: "B.Tech, Computer Science Engineering",
      institution: "Vellore Institute of Technology",
      location: "Bhopal",
      year: "Expected 2026",
      grade: "8.18 CGPA",
    },
    {
      degree: "Class XII, CBSE",
      institution: "Choithram School",
      location: "Indore",
      year: "2022",
      grade: "76%",
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="flex flex-col items-center mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary mb-4">
            <img 
              src={profileImage} 
              alt="Divyansh Joshi ASCII Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl text-terminal-cyan">About Me</h1>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm Divyansh Joshi, a Computer Science Engineering student at VIT Bhopal 
            with a passion for building innovative solutions across the full stack.
          </p>
          <p>
            My interests span from machine learning and AI to system architecture and 
            DevOps. I enjoy working on projects that challenge me to learn new 
            technologies and solve real-world problems.
          </p>
          <p>
            When I'm not coding, I'm probably optimizing my file management system 
            or tinkering with my homelab setup.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-6 text-terminal-cyan">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary pl-6">
              <h3 className="text-lg mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground mb-1">
                {edu.institution}, {edu.location}
              </p>
              <div className="flex gap-4 text-sm">
                <span className="text-terminal-yellow">{edu.year}</span>
                <span className="text-muted-foreground">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-6 text-terminal-cyan">Technical Skills</h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm text-terminal-yellow mb-2">{category}</h3>
              <p className="text-muted-foreground">
                {items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-4 text-terminal-cyan">Experience</h2>
        <div className="border-l-2 border-primary pl-6">
          <h3 className="text-lg mb-2">NAS Server Development</h3>
          <div className="flex gap-4 text-sm mb-3">
            <span className="text-terminal-yellow">2024</span>
            <span className="text-muted-foreground">Personal Project</span>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>- Deployed NAS server using Proxmox with RAID storage and mechanized backup, ensuring 99.9% data availability.</li>
            <li>- Deployed SSH tunnel for secure remote access with encryption mechanisms, for 15+ primary users.</li>
            <li>- Optimized performance through RAID configuration and monitoring tools, achieving approximately 20% faster file transfer speeds for large datasets.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
