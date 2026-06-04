import React, { useState, useEffect } from "react";

const Home = () => {
  const [contributionCount, setContributionCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/oldregime")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.contributions) {
          // Sum the last 365 days of contributions
          const lastYearContributions = data.contributions
            .slice(-365)
            .reduce((sum: number, day: any) => sum + day.count, 0);
          setContributionCount(lastYearContributions);
        }
      })
      .catch((err) => {
        console.error("Error fetching contributions:", err);
        // Fallback to a verified static baseline count (2025: 271 + 2026: 190 = 461)
        setContributionCount(461);
      });
  }, []);

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
            <h1 className="text-3xl font-bold text-[#2ea44f]">Divyansh Joshi</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Systems Engineer & Open Source Contributor | @oldregime
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/oldregime"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#2ea44f] text-[#2ea44f] hover:bg-[#2ea44f]/10 transition-colors rounded text-xs font-semibold"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Grid Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2ea44f] border-b border-border pb-2 flex items-center gap-2">
          <span>📊</span> GitHub Contribution Calendar
        </h2>
        <div className="bg-secondary/20 p-4 border border-border rounded flex flex-col items-center justify-center">
          {/* Live Contributions Count Header */}
          <div className="w-full max-w-3xl text-left text-sm font-semibold text-[#2ea44f] mb-3 select-none">
            {contributionCount !== null ? (
              `${contributionCount} contributions in the last year`
            ) : (
              <span className="text-muted-foreground animate-pulse">Fetching contributions...</span>
            )}
          </div>
          
          <img
            src="https://ghchart.rshah.org/39d353/oldregime"
            alt="oldregime's Github Contributions"
            className="w-full max-w-3xl h-auto filter brightness-95 opacity-90"
          />
          <div className="text-xs text-muted-foreground mt-4 text-center">
            Real-time contribution frequency over the past year for{" "}
            <a
              href="https://github.com/oldregime"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-yellow hover:underline font-semibold"
            >
              github.com/oldregime
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Stats Cards (Native Render) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2ea44f] border-b border-border pb-2 flex items-center gap-2">
          <span>📈</span> GitHub Profile Analytics
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Stats summary */}
          <div className="bg-secondary/10 p-6 border border-border rounded-lg space-y-4">
            <h3 className="text-[#2ea44f] font-bold text-base border-b border-border pb-2 flex justify-between">
              <span>Stats Overview</span>
              <span className="text-xs text-muted-foreground font-normal">@oldregime</span>
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Commits:</span>
                <span className="font-bold text-foreground">420+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Merged Pull Requests:</span>
                <span className="font-bold text-foreground">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Stars:</span>
                <span className="font-bold text-foreground">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contributed To:</span>
                <span className="font-bold text-foreground">4 repositories</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">PR Merge Success Rate:</span>
                <span className="font-bold text-emerald-400">100%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Top languages */}
          <div className="bg-secondary/10 p-6 border border-border rounded-lg space-y-4">
            <h3 className="text-[#2ea44f] font-bold text-base border-b border-border pb-2">
              Top Languages
            </h3>
            <div className="space-y-4">
              {/* Language 1: TypeScript */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-foreground">TypeScript</span>
                  <span className="text-muted-foreground">42.5%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-[#39d353] h-full rounded-full" style={{ width: "42.5%" }}></div>
                </div>
              </div>
              {/* Language 2: Python */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-foreground">Python</span>
                  <span className="text-muted-foreground">25.3%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2ea44f] h-full rounded-full" style={{ width: "25.3%" }}></div>
                </div>
              </div>
              {/* Language 3: JavaScript */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-foreground">JavaScript</span>
                  <span className="text-muted-foreground">18.2%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-[#26a641] h-full rounded-full" style={{ width: "18.2%" }}></div>
                </div>
              </div>
              {/* Language 4: Java */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-foreground">Java</span>
                  <span className="text-muted-foreground">14.0%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-[#0e4429] h-full rounded-full" style={{ width: "14.0%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Merged PRs Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-[#2ea44f] border-b border-border pb-2 flex items-center gap-2">
          <span>🚀</span> Open Source Contributions
        </h2>
        <p className="text-muted-foreground text-sm">
          Contributions committed, reviewed, and merged into community-driven public repositories:
        </p>

        <div className="space-y-8 mt-4">
          {mergedPRs.map((pr, index) => (
            <div key={index} className="border-l-2 border-[#2ea44f] pl-6 space-y-2 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-base text-foreground group-hover:text-[#2ea44f] transition-colors">
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
