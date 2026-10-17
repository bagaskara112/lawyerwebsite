import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
  		colors: {
        // Royal Sapphire palette (Vibrant, authoritative, fresh & modern)
  			brand: {
  				'50': '#f0f6ff',  // Soft pearl blue tint
  				'100': '#e0edfe', // Ice blue surface & card border
  				'200': '#bae0fd', // Light sapphire border
  				'300': '#7cc5fb', // Sky highlight
  				'400': '#38a7f7', // Vivid sapphire
  				'500': '#0f8bf0', // Primary sapphire
  				'600': '#026ad2', // Royal Sapphire (Main Brand Color)
  				'700': '#0254aa', // Darker interactive sapphire
  				'800': '#07478a', // Deep royal sapphire
  				'900': '#0c3b6f', // Deep navy text
          '950': '#072144', // Darkest sapphire slate
  			},
        // Crisp Pearl & Platinum Slate (Neutral luxury counterpoint)
        silver: {
          '50': '#f8fafc',  // Ultra-clean pearl white
          '100': '#f1f5f9', // Soft pearl surface
          '200': '#e2e8f0', // Crisp subtle border
          '300': '#cbd5e1', // Slate divider
          '400': '#94a3b8', // Slate muted
          '500': '#64748b', // Platinum slate accent
          '600': '#475569', // Body text slate
          '700': '#334155', // High-contrast text
          '800': '#1e293b', // Deep charcoal slate
          '900': '#0f172a', // Jet slate
        },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        elevated: '0 10px 40px -5px rgba(0, 0, 0, 0.1)'
  		},
  		borderRadius: {
  			'2xl': '1rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
