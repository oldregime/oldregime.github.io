import React, { useState, useEffect } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [isExecuted, setIsExecuted] = useState(false);
  const [showNextPrompt, setShowNextPrompt] = useState(false);

  useEffect(() => {
    const command = "neofetch";
    let index = 0;
    
    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < command.length) {
          setTypedText((prev) => prev + command.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          const executeDelay = setTimeout(() => {
            setIsExecuted(true);
            const promptDelay = setTimeout(() => {
              setShowNextPrompt(true);
            }, 500);
            return () => clearTimeout(promptDelay);
          }, 600);
          return () => clearTimeout(executeDelay);
        }
      }, 120);
      return () => clearInterval(typingInterval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, []);

  // Outlined Linux Penguin (Tux) ASCII Art (15 lines)
  const asciiLogo = `            .---.
           /     \\
          \\\\  O O  /
           |  V  |
          /  ___  \\
         /  /   \\  \\
        /  /  V  \\  \\
       /  /       \\  \\
      /  /         \\  \\
     /  /           \\  \\
    |  |  /\\\\     /\\\\  |  |
    |  | /  \\\\___/  \\\\ |  |
     \\\\  \\\\           /  /
      \\\\  \`'-------'\`  /
       \`'-----------\`'`;

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
        <div className="flex items-center gap-1 animate-fade-in">
          <span className="text-[#51a2da] font-semibold">divyansh</span>
          <span className="text-muted-foreground">@</span>
          <span className="text-[#51a2da] font-semibold">lenovo-loq</span>
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
          {/* Left Column: Tux Penguin */}
          <pre className="text-yellow-500 font-bold select-none leading-tight">
            {asciiLogo}
          </pre>

          {/* Right Column: Fedora KDE System Specs */}
          <div className="space-y-1">
            <div>
              <span className="text-[#51a2da] font-bold">divyansh</span>
              <span className="text-foreground">@</span>
              <span className="text-[#51a2da] font-bold">lenovo-loq</span>
            </div>
            <div className="text-muted-foreground select-none">-------------------</div>
            
            <div>
              <span className="text-[#51a2da] font-bold">OS</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">Fedora Linux 40 (KDE Plasma) x86_64</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Host</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">Lenovo LOQ 15APH8 (82XT)</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Kernel</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">6.8.9-300.fc40.x86_64</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Uptime</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">2 hours, 15 mins</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Packages</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">2450 (rpm), 15 (flatpak)</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Shell</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">zsh 5.9</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Resolution</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">1920x1080</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">DE</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">Plasma 6.0.5</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">WM</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">KWin</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">WM Theme</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">Breeze-Dark</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Theme</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">Breeze-Dark [GTK2/3]</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Icons</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">Breeze [GTK2/3]</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Terminal</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">konsole</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">CPU</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">AMD Ryzen 7 7840HS w/ Radeon 780M (16) @ 5.137GHz</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">GPU</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">NVIDIA GeForce RTX 4050 Mobile / Max-Q</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">GPU</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">AMD Radeon 780M</span>
            </div>
            <div>
              <span className="text-[#51a2da] font-bold">Memory</span>
              <span className="text-foreground">:</span>
              <span className="text-foreground ml-2">7821MiB / 15420MiB (50%)</span>
            </div>

            {/* Color Blocks */}
            <div className="flex flex-col gap-0.5 pt-4 select-none">
              <div className="flex gap-1.5">
                <span className="w-5 h-4 bg-black border border-neutral-800"></span>
                <span className="w-5 h-4 bg-red-600"></span>
                <span className="w-5 h-4 bg-green-600"></span>
                <span className="w-5 h-4 bg-yellow-600"></span>
                <span className="w-5 h-4 bg-blue-600"></span>
                <span className="w-5 h-4 bg-purple-600"></span>
                <span className="w-5 h-4 bg-cyan-600"></span>
                <span className="w-5 h-4 bg-gray-300"></span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-5 h-4 bg-gray-600"></span>
                <span className="w-5 h-4 bg-red-400"></span>
                <span className="w-5 h-4 bg-green-400"></span>
                <span className="w-5 h-4 bg-yellow-400"></span>
                <span className="w-5 h-4 bg-blue-400"></span>
                <span className="w-5 h-4 bg-purple-400"></span>
                <span className="w-5 h-4 bg-cyan-400"></span>
                <span className="w-5 h-4 bg-white"></span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Command Line after execution */}
      {showNextPrompt && (
        <div className="pt-4">
          <div className="flex items-center gap-1 animate-fade-in">
            <span className="text-[#51a2da] font-semibold">divyansh</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-[#51a2da] font-semibold">lenovo-loq</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-yellow">~</span>
            <span className="text-foreground">$</span>
            <span className="inline-block w-2 h-4 bg-foreground ml-2 terminal-cursor"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
