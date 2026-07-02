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
        // Deep Charcoal for authoritative, premium feel
  			brand: {
  				'50': '#f6f6f7',
  				'100': '#e3e4e6',
  				'200': '#c6c9cc',
  				'300': '#a0a5ab',
  				'400': '#747b84',
  				'500': '#565e68',
  				'600': '#434952', // Primary
  				'700': '#373c42', // Darker interaction
  				'800': '#2f3338',
  				'900': '#292c30', // Deep background
          '950': '#1b1d1f', // Darkest
  			},
        // Soft Champagne Gold for sophisticated accents
        silver: {
          '50': '#fbfaf8',
          '100': '#f5f2ed',
          '200': '#ebe1d3',
          '300': '#decfb5',
          '400': '#d0b891',
          '500': '#c4a372', // Primary Accent
          '600': '#b78c57',
          '700': '#997145',
          '800': '#7e5d3c',
          '900': '#654b32',
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
