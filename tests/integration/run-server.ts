import { readdir } from 'node:fs/promises'
import { describe } from 'node:test'

describe('run-server', async () => {
  for (const file of await readdir('..')) {
    if (file.includes('.git') || file.includes('node_modules')) {
      continue
    }
    console.log(file)
  }
})
