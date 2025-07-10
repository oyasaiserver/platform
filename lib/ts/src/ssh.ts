import { EOL } from 'node:os'
import { type Config, NodeSSH, type SSHExecCommandResponse } from 'node-ssh'
import { mask } from './secrets.ts'

type Ssh = Readonly<{
  $(
    pieces: TemplateStringsArray,
    ...args: unknown[]
  ): Promise<SSHExecCommandResponse>
  sftp(localFile: string, remoteFile: string): Promise<void>
}>

type SshConfig = Config & {
  verbose?: boolean
}

export async function useSsh(
  config: SshConfig
): Promise<Ssh & AsyncDisposable> {
  const connection = new NodeSSH()
  await connection.connect(config)
  return {
    async $(pieces, ...args) {
      let command = ''
      for (let i = 0; i < pieces.length; i++) {
        command += pieces[i]
        if (i < args.length) {
          command += args[i]
        }
      }
      if (config.verbose) {
        console.log(`$ ${command}`)
      }
      const response = await connection.execCommand(command, {
        execOptions: {
          pty: true
        },
        stdin: config.password + EOL
      })
      if (response.stdout) {
        console.log(mask(response.stdout))
      }
      if (response.stderr) {
        console.error(mask(response.stderr))
      }
      return response
    },
    async sftp(localFile: string, remoteFile: string) {
      if (config.verbose) {
        console.log(`[sftp] uploading ${localFile} to ${remoteFile}`)
      }
      return connection.putFile(localFile, remoteFile)
    },
    async [Symbol.asyncDispose]() {
      connection.dispose()
    }
  }
}
