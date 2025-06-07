import { glob } from 'node:fs/promises'
import { join } from 'node:path'
import { directory } from '@oyasaiserver/platform/directory'
import { run } from 'npm-check-updates'
import { workspaces } from '../../package.json'

const packageFiles = await Array.fromAsync(
  glob(
    workspaces.map(workspace => {
      return join(directory.root, workspace, 'package.json')
    })
  )
)

await run({
  packageFile: '**/package.json',
  upgrade: true,
  install: 'always',
  jsonUpgraded: true
})

// await Promise.all(promises).then(console.log)
