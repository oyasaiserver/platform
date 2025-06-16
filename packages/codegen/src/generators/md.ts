import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { text } from 'node:stream/consumers'
import { dedent } from '@oyasaiserver/lib/dedent'
import type { ReactElement } from 'react'
import { prerenderToNodeStream } from 'react-dom/static'

type Config = Readonly<{
  dir: string
  filename: string
  component: ReactElement
}>

export async function md({ dir, component, filename }: Config): Promise<void> {
  await mkdir(dir, {
    recursive: true
  })
  const { prelude } = await prerenderToNodeStream(component)
  const rendered = await text(prelude)
  await writeFile(join(dir, filename), dedent(rendered))
}
