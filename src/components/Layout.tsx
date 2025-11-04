import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-2xl mb-4">
            <Link to="/" className="hover:text-primary">
              theoldregime.social/
            </Link>
          </h1>

          <div className="mb-4 font-mono text-xs text-terminal-green">
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">uptime</span>
            <div className="text-terminal-yellow ml-2">
              coding for 8 years (since class 9th) • current session: building the future
            </div>
          </div>
          
          <nav className="flex gap-1 text-sm mb-6">
            <Link 
              to="/" 
              className={isActive("/") ? "text-primary" : "text-foreground hover:text-primary"}
            >
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link 
              to="/projects" 
              className={isActive("/projects") ? "text-primary" : "text-foreground hover:text-primary"}
            >
              Projects
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link 
              to="/about" 
              className={isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}
            >
              About
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link 
              to="/contact" 
              className={isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}
            >
              Contact
            </Link>
          </nav>

          <div className="flex gap-4 text-sm">
            <a 
              href="https://github.com/oldregime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-yellow hover:text-primary"
            >
              Github
            </a>
            <a 
              href="https://linkedin.com/in/theoldregime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-yellow hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Divyansh Joshi. All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
