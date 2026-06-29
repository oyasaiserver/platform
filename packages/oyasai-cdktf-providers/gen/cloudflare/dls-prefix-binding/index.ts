// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/dls_prefix_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlsPrefixBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of a Cloudflare account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/dls_prefix_binding#account_id DlsPrefixBinding#account_id}
  */
  readonly accountId: string;
  /**
  * IP prefix in CIDR notation to bind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/dls_prefix_binding#cidr DlsPrefixBinding#cidr}
  */
  readonly cidr: string;
  /**
  * The ID of the parent IP prefix that contains the CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/dls_prefix_binding#prefix_id DlsPrefixBinding#prefix_id}
  */
  readonly prefixId: string;
  /**
  * Region key from managed regions (e.g., "us", "eu").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/dls_prefix_binding#region_key DlsPrefixBinding#region_key}
  */
  readonly regionKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/dls_prefix_binding cloudflare_dls_prefix_binding}
*/
export class DlsPrefixBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dls_prefix_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlsPrefixBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlsPrefixBinding to import
  * @param importFromId The id of the existing DlsPrefixBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/dls_prefix_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlsPrefixBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dls_prefix_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/dls_prefix_binding cloudflare_dls_prefix_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlsPrefixBindingConfig
  */
  public constructor(scope: Construct, id: string, config: DlsPrefixBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dls_prefix_binding',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
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
    this._cidr = config.cidr;
    this._prefixId = config.prefixId;
    this._regionKey = config.regionKey;
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

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix_id - computed: false, optional: false, required: true
  private _prefixId?: string; 
  public get prefixId() {
    return this.getStringAttribute('prefix_id');
  }
  public set prefixId(value: string) {
    this._prefixId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId;
  }

  // region_key - computed: false, optional: false, required: true
  private _regionKey?: string; 
  public get regionKey() {
    return this.getStringAttribute('region_key');
  }
  public set regionKey(value: string) {
    this._regionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionKeyInput() {
    return this._regionKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      cidr: cdktf.stringToTerraform(this._cidr),
      prefix_id: cdktf.stringToTerraform(this._prefixId),
      region_key: cdktf.stringToTerraform(this._regionKey),
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
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_id: {
        value: cdktf.stringToHclTerraform(this._prefixId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_key: {
        value: cdktf.stringToHclTerraform(this._regionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
