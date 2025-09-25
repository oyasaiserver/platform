import { directory } from '@oyasaiserver/lib/directory'
import { type APIEmbed, Colors, WebhookClient } from '@oyasaiserver/lib/discord'
import { Yaml } from '@oyasaiserver/lib/yaml'
import { compose } from '@oyasaiserver/onprem'
import { secrets } from '@oyasaiserver/secrets'
import { cp, glob, rm, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { pickConfig } from '../src/config.ts'

export async function prepare(): Promise<void> {
  const rf = {
    recursive: true,
    force: true
  } as const

  await rm('dist', rf)

  const jars = glob(`${directory.root}/plugins/*/build/libs/*.jar`)
  for await (const jar of jars) {
    const name = `${basename(jar).split('-')[0]}.jar`
    await cp(jar, join('dist/minecraft-main/plugins', name))
  }

  await cp('assets', 'dist', rf)

  await writeFile('dist/compose.yaml', Yaml.stringify(compose))
}

export async function sendWebhookNotification(event: 'start' | 'end' | 'error'): Promise<void> {
  const client = new WebhookClient({ url: secrets.DISCORD_WEBHOOK_URL })
  const embed = pickConfig<typeof event, APIEmbed>(event, {
    start: {
      title: 'Deployment Started',
      color: Colors.Yellow
    },
    end: {
      title: 'Deployment Succeeded',
      color: Colors.Green
    },
    error: {
      title: 'Deployment Failed',
      color: Colors.Red
    }
  })
  await client.send({
    embeds: [
      {
        ...embed,
        timestamp: new Date().toISOString(),
        footer: {
          text: `Triggered by ${process.env.CI ? 'GitHub Actions' : 'CLI'}`
        }
      }
    ]
  })
}
