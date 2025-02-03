import react from '@vitejs/plugin-react'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
})
