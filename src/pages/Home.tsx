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
      title: "test: prevent environment-dependent CAPTCHA test failures",
      repo: "TEAMMATES/teammates",
      repoUrl: "https://github.com/TEAMMATES/teammates",
      prUrl: "https://github.com/TEAMMATES/teammates/pull/14202",
      description:
        "Resolved environment-dependent test failures in the frontend spec suite by resetting the CAPTCHA site key to an empty string during test setup, preventing Angular compilation errors when local developer environments have custom keys configured.",
      tags: ["TypeScript", "Angular", "Testing", "reCAPTCHA"],
      date: "Jun 2026",
      status: "Merged",
    },
    {
      title: "feat: add onMaxParamLength to support 414 URI Too Long",
      repo: "delvedor/find-my-way",
      repoUrl: "https://github.com/delvedor/find-my-way",
      prUrl: "https://github.com/delvedor/find-my-way/pull/432",
      description:
        "Engineered parameter-length constraints into the HTTP route traversal logic to block malformed, oversized requests, preventing potential Regular Expression Denial of Service (ReDoS) vectors in Node.js backend routers.",
      tags: ["TypeScript", "Node.js", "Fastify", "Security", "Routing"],
      date: "May 2026",
      status: "Merged",
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
      status: "Merged",
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
              className="px-4 py-2 border border-terminal-yellow text-terminal-yellow hover:bg-terminal-yellow/10 transition-colors rounded text-xs font-semibold"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Grid Chart */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-terminal-cyan border-b border-border pb-2">
          GitHub Contribution Calendar
        </h2>
        <div className="bg-secondary/20 p-4 border border-border rounded flex flex-col items-center justify-center">
          {/* Live Contributions Count Header */}
          <div className="w-full max-w-3xl text-left text-sm font-semibold text-terminal-yellow mb-3 select-none">
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
        <h2 className="text-xl font-semibold text-terminal-cyan border-b border-border pb-2">
          GitHub Profile Analytics
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Stats summary */}
          <div className="bg-secondary/10 p-6 border border-border rounded-lg space-y-4">
            <h3 className="text-terminal-cyan font-bold text-base border-b border-border pb-2 flex justify-between">
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
                <span className="font-bold text-foreground">5</span>
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

          {/* Card 2: Commit Momentum */}
          <div className="bg-secondary/10 p-6 border border-border rounded-lg space-y-4">
            <h3 className="text-terminal-cyan font-bold text-base border-b border-border pb-2 flex justify-between">
              <span>Commit Momentum</span>
              <span className="text-xs text-muted-foreground font-normal">Activity Metrics</span>
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Longest Streak:</span>
                <span className="font-bold text-foreground">18 Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Merged PR Acceptance Rate:</span>
                <span className="font-bold text-emerald-400">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weekly Peak Hours:</span>
                <span className="font-bold text-foreground">18:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Commits / PR Ratio:</span>
                <span className="font-bold text-foreground">105:1</span>
              </div>
              <div className="text-xs text-muted-foreground pt-1.5 border-t border-border/20 italic">
                Focus: Post-lecture dev blocks & open source contributions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Merged PRs Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-terminal-cyan border-b border-border pb-2">
          Open Source Contributions
        </h2>
        <p className="text-muted-foreground text-sm">
          Contributions committed, reviewed, and merged into community-driven public repositories:
        </p>

        <div className="space-y-8 mt-4">
          {mergedPRs.map((pr, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 space-y-2 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-base text-foreground group-hover:text-terminal-yellow transition-colors">
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
                  {pr.status === "Merged" ? (
                    <span className="px-2 py-0.5 text-xs bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 rounded-full font-bold select-none">
                      ✓ Merged
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 text-xs bg-yellow-950/40 text-yellow-400 border border-yellow-500/30 rounded-full font-bold select-none">
                      ⏳ Under Review
                    </span>
                  )}
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
