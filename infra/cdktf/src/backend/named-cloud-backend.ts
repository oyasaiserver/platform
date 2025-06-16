import { constants } from '@oyasaiserver/lib/constants'
import { CloudBackend, NamedCloudWorkspace } from 'cdktf'
import type { Construct } from 'constructs'

export class NamedCloudBackend extends CloudBackend {
  public constructor(construct: Construct, name: string) {
    super(construct, {
      hostname: 'app.terraform.io',
      organization: constants.github.organization,
      workspaces: new NamedCloudWorkspace(name)
    })
  }
}
