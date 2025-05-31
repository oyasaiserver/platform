import { ok } from 'node:assert'
import { readFile } from 'node:fs/promises'
import { defineConfig } from 'tsup'

const environment = process.env.ENVIRONMENT
ok(environment)

const dotenvPublicKeys = await readFile(
  `../../envs/${environment}/.env`,
  'utf-8'
)
ok(dotenvPublicKeys)

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  target: 'es2022',
  clean: true,
  minify: true,
  shims: true,
  env: {
    DOTENV_PUBLIC_KEYS: dotenvPublicKeys
  },
  banner: {
    // language=javascript
    js: `
      import { createRequire } from 'node:module';
      const require = createRequire(import.meta.url);
    `
  }
})
