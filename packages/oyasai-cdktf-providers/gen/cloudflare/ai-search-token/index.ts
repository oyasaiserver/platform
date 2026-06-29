// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiSearchTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token#account_id AiSearchToken#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token#cf_api_id AiSearchToken#cf_api_id}
  */
  readonly cfApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token#cf_api_key AiSearchToken#cf_api_key}
  */
  readonly cfApiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token#legacy AiSearchToken#legacy}
  */
  readonly legacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token#name AiSearchToken#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token cloudflare_ai_search_token}
*/
export class AiSearchToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_search_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiSearchToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiSearchToken to import
  * @param importFromId The id of the existing AiSearchToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiSearchToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_search_token cloudflare_ai_search_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiSearchTokenConfig
  */
  public constructor(scope: Construct, id: string, config: AiSearchTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ai_search_token',
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
    this._cfApiId = config.cfApiId;
    this._cfApiKey = config.cfApiKey;
    this._legacy = config.legacy;
    this._name = config.name;
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

  // cf_api_id - computed: false, optional: false, required: true
  private _cfApiId?: string; 
  public get cfApiId() {
    return this.getStringAttribute('cf_api_id');
  }
  public set cfApiId(value: string) {
    this._cfApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cfApiIdInput() {
    return this._cfApiId;
  }

  // cf_api_key - computed: false, optional: false, required: true
  private _cfApiKey?: string; 
  public get cfApiKey() {
    return this.getStringAttribute('cf_api_key');
  }
  public set cfApiKey(value: string) {
    this._cfApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cfApiKeyInput() {
    return this._cfApiKey;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // legacy - computed: true, optional: true, required: false
  private _legacy?: boolean | cdktf.IResolvable; 
  public get legacy() {
    return this.getBooleanAttribute('legacy');
  }
  public set legacy(value: boolean | cdktf.IResolvable) {
    this._legacy = value;
  }
  public resetLegacy() {
    this._legacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyInput() {
    return this._legacy;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      cf_api_id: cdktf.stringToTerraform(this._cfApiId),
      cf_api_key: cdktf.stringToTerraform(this._cfApiKey),
      legacy: cdktf.booleanToTerraform(this._legacy),
      name: cdktf.stringToTerraform(this._name),
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
      cf_api_id: {
        value: cdktf.stringToHclTerraform(this._cfApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cf_api_key: {
        value: cdktf.stringToHclTerraform(this._cfApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy: {
        value: cdktf.booleanToHclTerraform(this._legacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
