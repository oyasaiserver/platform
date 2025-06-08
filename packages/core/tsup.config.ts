import { directory } from '@oyasaiserver/lib/directory'
import { readFileContent } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { defineConfig } from 'tsup'

export default defineConfig({
  banner: {
    // language=javascript
    js: `
      import { createRequire } from 'node:module';
      const require = createRequire(import.meta.url);
    `
  },
  clean: true,
  entry: ['src/index.ts'],
  env: {
    DOTENV_PUBLIC_KEYS: await readFileContent(
      `${directory.root}/envs/${secrets.ENVIRONMENT}/.env`
    )
  },
  format: 'esm',
  minify: true,
  shims: true,
  target: 'es2022'
})
