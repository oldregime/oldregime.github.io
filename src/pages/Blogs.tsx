import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      title: "The Day Software Became the Boss: A Real Story from India's Tech Revolution",
      date: "Jul 3, 2025",
      platform: "Medium",
      description: "When people think of AI in India, they imagine airports and startups. But the real revolution might begin behind a busy dosa counter. Exploring how AI is quietly transforming India's informal economy — from cafés to kiranas to rural healthcare.",
      link: "https://theoldregime.medium.com/the-day-software-became-the-boss-a-real-story-from-indias-tech-revolution-24c13240e7a2",
      readHere: "/blog/ai-revolution",
    },
    {
      title: "A Desi Guide to Inflation: Why Your Piggy Bank Isn't Getting Any Fatter",
      date: "Dec 31, 2024",
      platform: "Medium",
      description: "Explore the fun side of inflation with me. From samosas to chai, understand economic factors through relatable, humorous examples. Get tips on surviving the inflation game with a desi twist!",
      link: "https://medium.com/@theoldregime/why-your-piggy-bank-isnt-getting-any-fatter-a-desi-guide-to-inflation-c3df07c9a3e6",
      readHere: "/blog/inflation-guide",
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl mb-4 text-terminal-cyan">Blogs</h1>
        <p className="text-muted-foreground mb-8">
          My thoughts on technology, economics, and everything in between.
        </p>
      </section>

      <section className="space-y-8">
        {blogs.map((blog, index) => (
          <article key={index} className="group border-l-2 border-primary pl-6">
            <time className="text-sm text-muted-foreground block mb-2">
              {blog.date} · {blog.platform}
            </time>
            <h2 className="text-xl mb-3">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline cursor-pointer"
              >
                {blog.title}
              </a>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {blog.description}
            </p>
            <div className="flex gap-4 items-center">
              <Link
                to={blog.readHere}
                className="text-terminal-cyan hover:text-primary text-sm inline-flex items-center gap-1 border border-terminal-cyan px-3 py-1 rounded hover:bg-terminal-cyan/10 transition-colors"
              >
                Read Here
              </Link>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-yellow hover:text-primary text-sm inline-flex items-center gap-1"
              >
                Read on {blog.platform}
                <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 p-6 bg-secondary/30 border border-border rounded">
        <p className="text-muted-foreground text-sm">
          More articles coming soon! Follow me on{" "}
          <a
            href="https://medium.com/@theoldregime"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-yellow hover:underline"
          >
            Medium
          </a>{" "}
          to stay updated.
        </p>
      </section>
    </div>
  );
};

export default Blogs;
