import { directory } from './directory.ts'
import ignore from 'ignore'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const ignoreFile = await readFile(join(directory.root, '.gitignore'), 'utf-8')

export const gitignore = ignore().add(ignoreFile)
