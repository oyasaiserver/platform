import { repository } from '@oyasaiserver/lib/repository'
import { CloudBackend, NamedCloudWorkspace } from 'cdktf'
import type { Construct } from 'constructs'

export class NamedCloudBackend extends CloudBackend {
  public constructor(construct: Construct, name: string) {
    super(construct, {
      hostname: 'app.terraform.io',
      organization: repository.organization,
      workspaces: new NamedCloudWorkspace(name)
    })
  }
}
