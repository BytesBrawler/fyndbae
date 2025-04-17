import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Flutter app colors
        "app-primary": "#FF007F", // Neon Magenta
        "app-secondary": "#FF4500", // Fiery Orange
        "app-accent": "#FFD700", // Rich Gold
        "app-background": "#1A1325", // Deep Purple-Black
        "app-card": "#241733", // Rich Dark Violet
        "app-surface": "#322047", // Elegant Dark Purple
        "app-text-primary": "#EDE3F5", // Soft Lavender White
        "app-text-secondary": "#B8A5D6", // Faded Lilac
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          '0%, 100%': { 
            textShadow: '0 0 5px #FF007F, 0 0 15px #FF007F, 0 0 20px #FF007F'
          },
          '50%': { 
            textShadow: '0 0 10px #FF007F, 0 0 20px #FF007F, 0 0 30px #FF007F'
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      boxShadow: {
        'neon': '0 0 5px #FF007F, 0 0 10px #FF007F',
        'neon-lg': '0 0 10px #FF007F, 0 0 20px #FF007F',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right bottom, #FF007F, #FF007F)',
        'gradient-button': 'linear-gradient(to left bottom, #FF007F, #FF007F)',
        'gradient-card': 'linear-gradient(to right bottom, #241733, #322047)',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
