import React, { useState, useEffect } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [isExecuted, setIsExecuted] = useState(false);
  const [showNextPrompt, setShowNextPrompt] = useState(false);

  useEffect(() => {
    const command = "neofetch";
    let index = 0;
    
    // Initial delay before typing starts
    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < command.length) {
          setTypedText((prev) => prev + command.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          // Simulate "pressing enter" after typing is done
          const executeDelay = setTimeout(() => {
            setIsExecuted(true);
            // Show next prompt after output is printed
            const promptDelay = setTimeout(() => {
              setShowNextPrompt(true);
            }, 500);
            return () => clearTimeout(promptDelay);
          }, 600);
          return () => clearTimeout(executeDelay);
        }
      }, 120); // typing speed (ms per char)
      return () => clearInterval(typingInterval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, []);

  const asciiLogo = `     _________________
    /                /|
   /   [=]    [=]   / |
  /________________/  |
  |                |  |
  |   [=]    [=]   |  |
  |________________|  |
  |                |  /
  |   [=]    [=]   | /
  |________________|/`;

  return (
    <div className="font-mono text-sm leading-relaxed space-y-6">
      {/* CSS for blinking cursor */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .terminal-cursor {
          animation: blink 1s step-start infinite;
        }
      `}</style>

      {/* Terminal Command Line */}
      <div>
        <div className="flex items-center gap-1">
          <span className="text-terminal-green">divyansh</span>
          <span className="text-muted-foreground">@</span>
          <span className="text-terminal-cyan">portfolio</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-terminal-yellow">~</span>
          <span className="text-foreground">$</span>
          <span className="text-foreground ml-2">{typedText}</span>
          {!isExecuted && (
            <span className="inline-block w-2 h-4 bg-foreground ml-0.5 terminal-cursor"></span>
          )}
        </div>
      </div>

      {/* Neofetch Output */}
      {isExecuted && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 animate-fade-in duration-300">
          {/* Left Column: ASCII Server Rack */}
          <pre className="text-terminal-green font-bold select-none leading-tight">
            {asciiLogo}
          </pre>

          {/* Right Column: System Specs */}
          <div className="space-y-1.5">
            <div>
              <span className="text-terminal-cyan font-bold">divyansh</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-terminal-cyan font-bold">vitbhopal</span>
            </div>
            <div className="text-muted-foreground select-none">------------------------------------</div>
            <div>
              <span className="text-terminal-yellow font-semibold">OS</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-foreground ml-2">Ubuntu / CSE @ VIT Bhopal</span>
            </div>
            <div>
              <span className="text-terminal-yellow font-semibold">Role</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-foreground ml-2">Systems Engineer & AI Developer</span>
            </div>
            <div>
              <span className="text-terminal-yellow font-semibold">Kernel</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-foreground ml-2">LangGraph v0.1.0 // Proxmox VE 8.1</span>
            </div>
            <div>
              <span className="text-terminal-yellow font-semibold">Uptime</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-foreground ml-2">Graduation expected June 2026</span>
            </div>
            <div>
              <span className="text-terminal-yellow font-semibold">Shell</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-foreground ml-2">zsh (React Virtual Console)</span>
            </div>
            <div>
              <span className="text-terminal-yellow font-semibold">Homelab</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-foreground ml-2">TrueNAS Core + Proxmox RAID (99.9% Uptime)</span>
            </div>
            <div>
              <span className="text-terminal-yellow font-semibold">Focus</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-foreground ml-2">Agentic Workflows & Infrastructure Automation</span>
            </div>
            <div>
              <span className="text-terminal-yellow font-semibold">Skills</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-foreground ml-2">Python, AWS, GCP, Docker, VectorDB, Git</span>
            </div>
            <div>
              <span className="text-terminal-yellow font-semibold">Status</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-terminal-green font-bold ml-2">🟢 Open to Internships / Jobs</span>
            </div>

            {/* Color Blocks */}
            <div className="flex gap-1.5 pt-4">
              <span className="w-5 h-4 bg-black border border-neutral-700"></span>
              <span className="w-5 h-4 bg-red-500"></span>
              <span className="w-5 h-4 bg-green-500"></span>
              <span className="w-5 h-4 bg-yellow-500"></span>
              <span className="w-5 h-4 bg-blue-500"></span>
              <span className="w-5 h-4 bg-purple-500"></span>
              <span className="w-5 h-4 bg-cyan-500"></span>
              <span className="w-5 h-4 bg-white"></span>
            </div>
          </div>
        </div>
      )}

      {/* Next Command Line after execution */}
      {showNextPrompt && (
        <div className="pt-4">
          <div className="flex items-center gap-1">
            <span className="text-terminal-green">divyansh</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-terminal-cyan">portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-yellow">~</span>
            <span className="text-foreground">$</span>
            <span className="inline-block w-2 h-4 bg-foreground ml-2.5 terminal-cursor"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
