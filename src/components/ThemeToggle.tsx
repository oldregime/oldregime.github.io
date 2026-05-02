import { useEffect, useState } from "react";
import { Monitor, Moon, Sun, Palette } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Theme = "default" | "light" | "catppuccin-latte" | "catppuccin-frappe" | "catppuccin-macchiato" | "catppuccin-mocha";

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("theme") as Theme) || "default";
        }
        return "default";
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove all previous theme classes/attributes if any
        root.classList.remove("light", "dark");
        root.removeAttribute("data-theme");

        if (theme === "default") {
            // Default is our custom dark terminal theme
            root.classList.add("dark");
        } else {
            root.setAttribute("data-theme", theme);
            if (theme === "light" || theme === "catppuccin-latte") {
                root.classList.add("light");
            } else {
                root.classList.add("dark");
            }
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="fixed top-4 right-4 z-50 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground">
                    <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("default")}>
                    <Monitor className="mr-2 h-4 w-4" />
                    <span>Terminal (Default)</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("catppuccin-latte")}>
                    <Sun className="mr-2 h-4 w-4 text-orange-400" />
                    <span>Catppuccin Latte</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("catppuccin-frappe")}>
                    <Moon className="mr-2 h-4 w-4 text-indigo-400" />
                    <span>Catppuccin Frappé</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("catppuccin-macchiato")}>
                    <Moon className="mr-2 h-4 w-4 text-purple-400" />
                    <span>Catppuccin Macchiato</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("catppuccin-mocha")}>
                    <Moon className="mr-2 h-4 w-4 text-pink-400" />
                    <span>Catppuccin Mocha</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
