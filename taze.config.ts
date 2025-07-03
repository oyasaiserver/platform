import { defineConfig } from 'taze'

export default defineConfig({
  mode: 'latest',
  exclude: '@oyasaiserver/*',
  recursive: true,
  force: true,
  write: true,
  update: true,
  install: true
})
