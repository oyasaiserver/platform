// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_dlp_sensitivity_level
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustDlpSensitivityLevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_dlp_sensitivity_level#account_id DataCloudflareZeroTrustDlpSensitivityLevel#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_dlp_sensitivity_level#sensitivity_group_id DataCloudflareZeroTrustDlpSensitivityLevel#sensitivity_group_id}
  */
  readonly sensitivityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_dlp_sensitivity_level#sensitivity_level_id DataCloudflareZeroTrustDlpSensitivityLevel#sensitivity_level_id}
  */
  readonly sensitivityLevelId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_dlp_sensitivity_level cloudflare_zero_trust_dlp_sensitivity_level}
*/
export class DataCloudflareZeroTrustDlpSensitivityLevel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_dlp_sensitivity_level";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpSensitivityLevel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpSensitivityLevel to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustDlpSensitivityLevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_dlp_sensitivity_level#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpSensitivityLevel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_sensitivity_level", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_dlp_sensitivity_level cloudflare_zero_trust_dlp_sensitivity_level} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustDlpSensitivityLevelConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpSensitivityLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_dlp_sensitivity_level',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._sensitivityGroupId = config.sensitivityGroupId;
    this._sensitivityLevelId = config.sensitivityLevelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sensitivity_group_id - computed: false, optional: false, required: true
  private _sensitivityGroupId?: string; 
  public get sensitivityGroupId() {
    return this.getStringAttribute('sensitivity_group_id');
  }
  public set sensitivityGroupId(value: string) {
    this._sensitivityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityGroupIdInput() {
    return this._sensitivityGroupId;
  }

  // sensitivity_level_id - computed: false, optional: false, required: true
  private _sensitivityLevelId?: string; 
  public get sensitivityLevelId() {
    return this.getStringAttribute('sensitivity_level_id');
  }
  public set sensitivityLevelId(value: string) {
    this._sensitivityLevelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityLevelIdInput() {
    return this._sensitivityLevelId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      sensitivity_group_id: cdktf.stringToTerraform(this._sensitivityGroupId),
      sensitivity_level_id: cdktf.stringToTerraform(this._sensitivityLevelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity_group_id: {
        value: cdktf.stringToHclTerraform(this._sensitivityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity_level_id: {
        value: cdktf.stringToHclTerraform(this._sensitivityLevelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
