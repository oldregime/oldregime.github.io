import { Link } from "react-router-dom";

const AIRevolution = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="mb-8">
        <Link to="/blogs" className="text-terminal-yellow hover:underline text-sm">
          ← Back to Blogs
        </Link>
      </div>

      <article className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-4 text-terminal-cyan">
          The Day Software Became the Boss: A Real Story from India's Tech Revolution
        </h1>
        
        <div className="text-sm text-muted-foreground mb-8">
          <span>Jul 3, 2025</span> · <span>4 min read</span>
        </div>

        <div className="bg-secondary/20 border-l-4 border-terminal-cyan p-4 mb-8 italic text-sm">
          💡 Note: AI tools were used to clean up formatting and help rewrite some sections of this post for better clarity. The core idea, voice, and perspective are mine.
        </div>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            When people think of Artificial Intelligence in India, they usually imagine facial recognition in airports, chat bots on e-commerce apps, or maybe some startup in Bengaluru building models for stock market prediction. But the real revolution may not come from startups or research labs.
          </p>
          <p className="text-lg font-semibold text-foreground">
            It might begin behind a busy dosa counter.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">Can AI Replace the Local Manager?</h2>
          <p>
            Let's take a scenario. You walk into a modest South Indian café near Nagpur — steel tumblers, sambar spills, waiters shouting over the noise. Except, in this café, there's no manager barking orders. Instead, each staff member wears a basic Bluetooth headset. An invisible AI system quietly guides them:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>"Clean table four."</li>
            <li>"Prepare two masala dosas."</li>
            <li>"Check the restroom every 45 minutes."</li>
          </ul>
          <p>
            This AI, nicknamed Saarthi, doesn't need fancy hardware or cloud GPUs. It's a simple local system that reads inputs like order flow, cleanliness status, and time-of-day patterns. It dispatches tasks, tracks completion, and ensures smooth operations — all without human supervision.
          </p>

          <p className="font-semibold">The result?</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Staff are more efficient.</li>
            <li>Customers are happier.</li>
            <li>The business saves money.</li>
          </ul>
          <p>And most interestingly, no one misses the manager.</p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">Why This Matters</h2>
          <p>
            What makes this scenario powerful isn't the technology. It's the context. This isn't a multinational chain automating its back-end. It's a humble café — the kind where plastic chairs wobble, but chai hits differently. And that's where the potential of AI in India lies.
          </p>
          <p>
            AI is no longer limited to labs and LLMs. It's entering the informal economy. Quietly. Efficiently.
          </p>
          <p>
            Saarthi is just one example of a broader movement: using AI not to replace workers, but to organize them better.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">🧠 Other Everyday Applications of AI Emerging in India</h2>

          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">1. AI-Powered Kirana Inventory Management</h3>
          <p>Small grocery shops across India often rely on intuition to restock. But tools are now emerging that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Track best-selling SKUs</li>
            <li>Predict demand based on festivals, weather, or cricket matches</li>
            <li>Auto-generate supplier lists via WhatsApp</li>
          </ul>
          <p>Think of it as a mini BigBasket brain for your corner kirana.</p>

          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">2. Voice-First AI for Farmers</h3>
          <p>
            Instead of English-only apps, several initiatives are building AI tools in Hindi, Marathi, Bengali — accessible via phone call. A farmer can ask:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>"What pesticide for leaf curl in tomatoes?"</li>
            <li>"What's today's mandi rate for onions?"</li>
          </ul>
          <p>And get voice responses instantly, powered by domain-specific AI.</p>

          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">3. Smart Waste Management</h3>
          <p>In cities like Indore and Surat, AI can be used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Detect overflowing garbage bins via image analysis</li>
            <li>Optimize garbage truck routes based on sensor data</li>
            <li>Identify littering hotspots</li>
          </ul>
          <p>It's like Swachh Bharat meets Silicon Valley.</p>

          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">4. Automated School Attendance & Alerts</h3>
          <p>Low-cost facial recognition or QR systems can help teachers in rural schools:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mark attendance with a click</li>
            <li>Send SMS alerts to parents</li>
            <li>Detect drop-out patterns using basic analytics</li>
          </ul>

          <h3 className="text-xl font-semibold text-terminal-cyan mt-6">5. Digital Assistants for Rural Healthcare Workers</h3>
          <p>ASHA and ANM workers can now use voice-input AI tools to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Log patient vitals</li>
            <li>Get medicine reminders</li>
            <li>Detect risk factors like malnutrition using data models</li>
          </ul>
          <p>They don't need to be tech-savvy. They just need to speak.</p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">But… Is This the Future We Want?</h2>
          <p>These examples raise critical questions — especially for us in Computer Science:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Are we building systems that assist, or systems that control?</li>
            <li>Will AI empower workers, or turn them into step-following bots?</li>
            <li>Who decides the logic? Who audits the ethics?</li>
          </ul>
          <p>
            In the case of Saarthi, workers appreciated not being yelled at, and tasks became easier. But the silence — the total absence of human feedback — can also feel strange. When you're told what to do every minute, at what point do you stop thinking?
          </p>

          <h2 className="text-2xl font-semibold text-terminal-yellow mt-8">The Invisible Revolution</h2>
          <p>
            India's AI moment won't look like Silicon Valley. It'll be messier, cheaper, and more frugal. It will happen in languages that global AI companies don't support. It will run on second-hand PCs and phones. And it will change how work happens across cafés, kiranas, classrooms, and clinics.
          </p>
          <p className="font-semibold">Not with robots.</p>
          <p className="font-semibold">But with quiet, invisible software.</p>
          <p className="mt-6">
            If you're building in AI today, don't just look at autonomous cars or generative models. Look at the chaiwala. The ASHA worker. The street vendor. That's where AI can be truly transformational.
          </p>
          <p className="text-lg font-semibold text-terminal-cyan mt-4">
            Not just artificial intelligence. But applied intelligence.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="https://theoldregime.medium.com/the-day-software-became-the-boss-a-real-story-from-indias-tech-revolution-24c13240e7a2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-yellow hover:underline"
          >
            Read original on Medium →
          </a>
        </div>
      </article>
    </div>
  );
};

export default AIRevolution;
