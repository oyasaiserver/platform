import { objectKeys } from '@oyasaiserver/cdktf/object'
import { downloadPlugins } from '@oyasaiserver/plugins/download'
import { registry } from '@oyasaiserver/plugins/registry'
import { mkdir, rm } from 'node:fs/promises'

const dir = 'gen'

await rm(dir, { recursive: true, force: true })
await mkdir(dir)

await downloadPlugins(dir, objectKeys(registry))
