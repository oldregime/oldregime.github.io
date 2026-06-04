import React from "react";

const Home = () => {
  const mergedPRs = [
    {
      title: "feat: add onMaxParamLength to support 414 URI Too Long",
      repo: "delvedor/find-my-way",
      repoUrl: "https://github.com/delvedor/find-my-way",
      prUrl: "https://github.com/delvedor/find-my-way/pull/432",
      description:
        "Engineered parameter-length constraints into the HTTP route traversal logic to block malformed, oversized requests, preventing potential Regular Expression Denial of Service (ReDoS) vectors in Node.js backend routers.",
      tags: ["TypeScript", "Node.js", "Fastify", "Security", "Routing"],
      date: "May 2026",
    },
    {
      title: "Change getDisplayWeight return type from any to string",
      repo: "TEAMMATES/teammates",
      repoUrl: "https://github.com/TEAMMATES/teammates",
      prUrl: "https://github.com/TEAMMATES/teammates/pull/13862",
      description:
        "Refactored types across evaluation components, eliminating legacy TypeScript 'any' types in student evaluation calculators to improve type safety and maintainability in an enterprise student peer evaluation platform.",
      tags: ["TypeScript", "React", "Static Analysis", "Type Safety"],
      date: "May 2026",
    },
  ];

  return (
    <div className="font-mono text-sm leading-relaxed space-y-12">
      {/* Header Profile Title */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl font-bold text-terminal-cyan">Divyansh Joshi</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Systems Engineer & Open Source Contributor | @oldregime
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/oldregime"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-terminal-yellow text-terminal-yellow hover:bg-terminal-yellow/10 transition-colors rounded text-xs"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Grid Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-terminal-cyan border-b border-border pb-2 flex items-center gap-2">
          <span>📊</span> GitHub Contribution Calendar
        </h2>
        <div className="bg-secondary/20 p-4 border border-border rounded flex flex-col items-center justify-center">
          <img
            src="https://ghchart.rshah.org/51a2da/oldregime"
            alt="oldregime's Github Contributions"
            className="w-full max-w-3xl h-auto filter brightness-95 opacity-90"
          />
          <div className="text-xs text-muted-foreground mt-4 text-center">
            Real-time contribution frequency over the past year for{" "}
            <a
              href="https://github.com/oldregime"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-yellow hover:underline"
            >
              github.com/oldregime
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Stats Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-terminal-cyan border-b border-border pb-2 flex items-center gap-2">
          <span>📈</span> GitHub Profile Analytics
        </h2>
        <div className="grid grid-md md:grid-cols-2 gap-6">
          {/* Card 1: Stats summary */}
          <div className="bg-secondary/10 p-4 border border-border rounded flex justify-center items-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=oldregime&show_icons=true&theme=transparent&hide_border=true&title_color=51a2da&text_color=94a3b8&icon_color=51a2da&text_bold=false"
              alt="GitHub Stats"
              className="w-full max-w-sm h-auto"
            />
          </div>
          {/* Card 2: Top languages */}
          <div className="bg-secondary/10 p-4 border border-border rounded flex justify-center items-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=oldregime&layout=compact&theme=transparent&hide_border=true&title_color=51a2da&text_color=94a3b8"
              alt="Top Languages"
              className="w-full max-w-sm h-auto"
            />
          </div>
        </div>
      </section>

      {/* Open Source Merged PRs Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-terminal-cyan border-b border-border pb-2 flex items-center gap-2">
          <span>🚀</span> Open Source Contributions
        </h2>
        <p className="text-muted-foreground text-sm">
          Contributions committed, reviewed, and merged into community-driven public repositories:
        </p>

        <div className="space-y-8 mt-4">
          {mergedPRs.map((pr, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 space-y-2 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                    <a href={pr.prUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {pr.title}
                    </a>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Repository:{" "}
                    <a
                      href={pr.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terminal-cyan hover:underline font-semibold"
                    >
                      {pr.repo}
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 rounded-full font-bold select-none">
                    ✓ Merged
                  </span>
                  <span className="text-xs text-terminal-yellow select-none">{pr.date}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pr.description}
              </p>
              <div className="flex gap-2 flex-wrap pt-1">
                {pr.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[10px] px-2 py-0.5 bg-secondary text-foreground rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
