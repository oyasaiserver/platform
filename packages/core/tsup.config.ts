import { directory } from '@oyasaiserver/platform/directory'
import { readFileContent } from '@oyasaiserver/platform/fs'
import { secrets } from '@oyasaiserver/platform/secrets'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  target: 'es2022',
  clean: true,
  minify: true,
  shims: true,
  env: {
    DOTENV_PUBLIC_KEYS: await readFileContent(
      `${directory.root}/envs/${secrets.ENVIRONMENT}/.env`
    )
  },
  banner: {
    // language=javascript
    js: `
      import { createRequire } from 'node:module';
      const require = createRequire(import.meta.url);
    `
  }
})
