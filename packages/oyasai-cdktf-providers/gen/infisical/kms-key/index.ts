// https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the KMS key. Maximum 500 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key#description KmsKey#description}
  */
  readonly description?: string;
  /**
  * The encryption algorithm for the key. Options: aes-256-gcm, aes-128-gcm, RSA_4096, ECC_NIST_P256. Defaults to 'aes-256-gcm'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key#encryption_algorithm KmsKey#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Whether the key is disabled. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key#is_disabled KmsKey#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * The usage of the key. Options: encrypt-decrypt, sign-verify. Defaults to 'encrypt-decrypt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key#key_usage KmsKey#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * The name of the KMS key. Must be 1-32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key#name KmsKey#name}
  */
  readonly name: string;
  /**
  * The ID of the project where the KMS key will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key#project_id KmsKey#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key infisical_kms_key}
*/
export class KmsKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_kms_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsKey to import
  * @param importFromId The id of the existing KmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_kms_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/kms_key infisical_kms_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.18.0'
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
    this._encryptionAlgorithm = config.encryptionAlgorithm;
    this._isDisabled = config.isDisabled;
    this._keyUsage = config.keyUsage;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // encryption_algorithm - computed: true, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // key_usage - computed: true, optional: true, required: false
  private _keyUsage?: string; 
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
  public set keyUsage(value: string) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_usage: {
        value: cdktf.stringToHclTerraform(this._keyUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
