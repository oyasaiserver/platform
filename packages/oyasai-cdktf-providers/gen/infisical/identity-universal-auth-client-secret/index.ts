// https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_universal_auth_client_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityUniversalAuthClientSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_universal_auth_client_secret#description IdentityUniversalAuthClientSecret#description}
  */
  readonly description?: string;
  /**
  * The ID of the identity to create a client secret for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_universal_auth_client_secret#identity_id IdentityUniversalAuthClientSecret#identity_id}
  */
  readonly identityId: string;
  /**
  * The maximum number of times that the client secret can be used; a value of 0 implies infinite number of uses. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_universal_auth_client_secret#number_of_uses_limit IdentityUniversalAuthClientSecret#number_of_uses_limit}
  */
  readonly numberOfUsesLimit?: number;
  /**
  * The lifetime for the client secret in seconds. Default: 0 - not expiring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_universal_auth_client_secret#ttl IdentityUniversalAuthClientSecret#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_universal_auth_client_secret infisical_identity_universal_auth_client_secret}
*/
export class IdentityUniversalAuthClientSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_universal_auth_client_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityUniversalAuthClientSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityUniversalAuthClientSecret to import
  * @param importFromId The id of the existing IdentityUniversalAuthClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_universal_auth_client_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityUniversalAuthClientSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_universal_auth_client_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/identity_universal_auth_client_secret infisical_identity_universal_auth_client_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityUniversalAuthClientSecretConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityUniversalAuthClientSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_universal_auth_client_secret',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._identityId = config.identityId;
    this._numberOfUsesLimit = config.numberOfUsesLimit;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // is_revoked - computed: true, optional: false, required: false
  public get isRevoked() {
    return this.getBooleanAttribute('is_revoked');
  }

  // number_of_uses - computed: true, optional: false, required: false
  public get numberOfUses() {
    return this.getNumberAttribute('number_of_uses');
  }

  // number_of_uses_limit - computed: true, optional: true, required: false
  private _numberOfUsesLimit?: number; 
  public get numberOfUsesLimit() {
    return this.getNumberAttribute('number_of_uses_limit');
  }
  public set numberOfUsesLimit(value: number) {
    this._numberOfUsesLimit = value;
  }
  public resetNumberOfUsesLimit() {
    this._numberOfUsesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfUsesLimitInput() {
    return this._numberOfUsesLimit;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      identity_id: cdktf.stringToTerraform(this._identityId),
      number_of_uses_limit: cdktf.numberToTerraform(this._numberOfUsesLimit),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_uses_limit: {
        value: cdktf.numberToHclTerraform(this._numberOfUsesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
