import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'hero-gradient': 'var(--hero-gradient)',
				'card-gradient': 'var(--card-gradient)',
				'accent-gradient': 'var(--accent-gradient)',
				'glass-gradient': 'var(--glass-gradient)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: 'var(--shadow-elegant)' },
					'50%': { boxShadow: 'var(--shadow-glow)' }
				},
				'fade-in': {
					'from': { opacity: '0', transform: 'translateY(20px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'from': { opacity: '0', transform: 'translateY(30px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'from': { opacity: '0', transform: 'translateX(-30px)' },
					'to': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'from': { opacity: '0', transform: 'translateX(30px)' },
					'to': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'from': { opacity: '0', transform: 'scale(0.95)' },
					'to': { opacity: '1', transform: 'scale(1)' }
				},
				'gradient': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'spin-slow': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				'blob-morph': {
					'0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }
				},
				'tilt': {
					'0%, 100%': { transform: 'rotate(-0.5deg)' },
					'50%': { transform: 'rotate(0.5deg)' }
				},
				'orb-drift': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
					'33%': { transform: 'translate(30px, -20px) scale(1.05)' },
					'66%': { transform: 'translate(-20px, 30px) scale(0.95)' }
				},
				'fade-in-down': {
					'from': { opacity: '0', transform: 'translateY(-30px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'zoom-in': {
					'from': { opacity: '0', transform: 'scale(0.8)' },
					'to': { opacity: '1', transform: 'scale(1)' }
				},
				'blur-in': {
					'from': { opacity: '0', filter: 'blur(12px)', transform: 'translateY(20px)' },
					'to': { opacity: '1', filter: 'blur(0px)', transform: 'translateY(0)' }
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale(0.5)' },
					'60%': { opacity: '1', transform: 'scale(1.08)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '200% 50%' }
				},
				'ping-slow': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'75%, 100%': { transform: 'scale(2.2)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-down': 'fade-in-down 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'zoom-in': 'zoom-in 0.5s ease-out',
				'blur-in': 'blur-in 0.8s ease-out',
				'bounce-in': 'bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'gradient': 'gradient 4s ease infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'text-shimmer': 'text-shimmer 4s linear infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'blob-morph': 'blob-morph 12s ease-in-out infinite',
				'tilt': 'tilt 6s ease-in-out infinite',
				'orb-drift': 'orb-drift 15s ease-in-out infinite',
				'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
