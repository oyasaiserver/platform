import { App } from 'cdktf'
import { getEnvironment } from './secrets.ts'
import { CloudStack } from './stacks/cloud-stack.ts'
import { SecretsStack } from './stacks/secrets-stack.ts'
import { ServicesStack } from './stacks/services-stack.ts'

const environment = getEnvironment()

const app = new App()

if (environment !== 'local') {
  new CloudStack(app, 'cloud')
}

if (environment === 'production') {
  new SecretsStack(app, 'secrets')
}

new ServicesStack(app, 'services')

app.synth()
