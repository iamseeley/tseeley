import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        'brand': 'var(--brand)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'type-primary': 'var(--typeface-primary)',
        'type-secondary': 'var(--typeface-secondary)',
        'type-tertiary': 'var(--typeface-tertiary)',
      },
  }
},
  plugins: [require('@tailwindcss/typography'),],
}
export default config
