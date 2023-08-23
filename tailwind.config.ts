import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        paw_pry: '#FF868E',
        voting: 'rgba(255, 255, 255, 0.60)',
        breed: '#FBE0DC',
        gallery: 'rgba(255, 255, 255, 0.60)',
        paw_black: '#1D1D1D',
        paw_grey: '#8C8C8C',
        hover_pry: '#FBE0DC',
      },
      borderRadius: {
        20: '20px'
      },
      spacing: {
        138: '138px',
        57: '57%',
        43: '43%'
      },
      fontSize: {
        12: '12px',
        44: '44px',
        20: '20px',
      }
    },
  },
  plugins: [],
}
export default config
