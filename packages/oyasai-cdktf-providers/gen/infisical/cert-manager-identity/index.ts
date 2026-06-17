// https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_identity#identity_id CertManagerIdentity#identity_id}
  */
  readonly identityId: string;
  /**
  * The role to assign to the identity (admin or member)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_identity#role CertManagerIdentity#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_identity infisical_cert_manager_identity}
*/
export class CertManagerIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerIdentity to import
  * @param importFromId The id of the existing CertManagerIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/cert_manager_identity infisical_cert_manager_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_identity',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identityId = config.identityId;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_id: cdktf.stringToTerraform(this._identityId),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
