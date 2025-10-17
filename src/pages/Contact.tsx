const Contact = () => {
  const contacts = [
    {
      label: "Email",
      value: "divyansh8065@gmail.com",
      href: "mailto:divyansh8065@gmail.com",
      color: "text-primary",
    },
    {
      label: "Phone",
      value: "+91-89624-30535",
      href: "tel:+918962430535",
      color: "text-terminal-green",
    },
    {
      label: "GitHub",
      value: "github.com/oldregime",
      href: "https://github.com/oldregime",
      color: "text-terminal-yellow",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/theoldregime",
      href: "https://linkedin.com/in/theoldregime",
      color: "text-terminal-cyan",
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl mb-4 text-terminal-cyan">Contact</h1>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out for collaborations, opportunities, or just to say hi!
        </p>
      </section>

      <section>
        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-muted-foreground min-w-[100px]">
                {contact.label}:
              </span>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${contact.color} hover:underline`}
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 p-6 bg-card border border-border">
        <h2 className="text-lg mb-4 text-terminal-yellow">$ whoami</h2>
        <p className="text-muted-foreground leading-relaxed">
          I'm currently open to internship opportunities and interesting projects. 
          If you're working on something cool or looking for someone passionate 
          about technology, let's connect!
        </p>
      </section>
    </div>
  );
};

export default Contact;
