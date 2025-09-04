import {
  type Config,
  NodeSSH,
  type SSHExecCommandResponse,
  type SSHGetPutDirectoryOptions
} from 'node-ssh'
import { EOL } from 'node:os'

type Ssh = Readonly<{
  $(pieces: TemplateStringsArray, ...args: unknown[]): Promise<SSHExecCommandResponse>
  put(localFile: string, remoteFile: string): Promise<void>
  putDirectory(
    localDirectory: string,
    remoteDirectory: string,
    options?: SSHGetPutDirectoryOptions
  ): Promise<boolean>
}>

type SshConfig = Config & {
  verbose?: boolean
}

export async function useSsh(config: SshConfig): Promise<Ssh & AsyncDisposable> {
  const connection = new NodeSSH()
  await connection.connect(config)
  return {
    async $(pieces, ...args) {
      const command = pieces.reduce((acc, piece, i) => acc + piece + (args[i] || ''), '')
      if (config.verbose) {
        console.log(`$ ${command}`)
      }
      return connection.execCommand(command, {
        execOptions: {
          pty: true
        },
        stdin: config.password + EOL
      })
    },
    async put(localFile: string, remoteFile: string) {
      if (config.verbose) {
        console.log(`[sftp] uploading ${localFile} to ${remoteFile}`)
      }
      return connection.putFile(localFile, remoteFile)
    },
    async putDirectory(
      localDirectory: string,
      remoteDirectory: string,
      options?: SSHGetPutDirectoryOptions
    ) {
      if (config.verbose) {
        console.log(`[sftp] uploading directory ${localDirectory} to ${remoteDirectory}`)
      }
      return connection.putDirectory(localDirectory, remoteDirectory, {
        concurrency: 5,
        recursive: true,
        validate() {
          return true
        },
        ...options
      })
    },
    async [Symbol.asyncDispose]() {
      connection.dispose()
    }
  }
}
