import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { dedent } from '@oyasaiserver/lib/dedent'
import { type ReactElement, renderToString } from '@oyasaiserver/lib/preact'

type Config = Readonly<{
  dir: string
  filename: string
  component: ReactElement
}>

export async function md({ dir, component, filename }: Config): Promise<void> {
  await mkdir(dir, {
    recursive: true
  })
  await writeFile(join(dir, filename), dedent(renderToString(component)))
}
