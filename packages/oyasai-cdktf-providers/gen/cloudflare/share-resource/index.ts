// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShareResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource#account_id ShareResource#account_id}
  */
  readonly accountId: string;
  /**
  * Resource Metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource#meta ShareResource#meta}
  */
  readonly meta: string;
  /**
  * Account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource#resource_account_id ShareResource#resource_account_id}
  */
  readonly resourceAccountId: string;
  /**
  * Share Resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource#resource_id ShareResource#resource_id}
  */
  readonly resourceId: string;
  /**
  * Resource Type.
  * Available values: "custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource#resource_type ShareResource#resource_type}
  */
  readonly resourceType: string;
  /**
  * Share identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource#share_id ShareResource#share_id}
  */
  readonly shareId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource cloudflare_share_resource}
*/
export class ShareResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_share_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShareResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShareResource to import
  * @param importFromId The id of the existing ShareResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShareResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_share_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/share_resource cloudflare_share_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShareResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ShareResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_share_resource',
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
    this._meta = config.meta;
    this._resourceAccountId = config.resourceAccountId;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._shareId = config.shareId;
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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta - computed: false, optional: false, required: true
  private _meta?: string; 
  public get meta() {
    return this.getStringAttribute('meta');
  }
  public set meta(value: string) {
    this._meta = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // resource_account_id - computed: false, optional: false, required: true
  private _resourceAccountId?: string; 
  public get resourceAccountId() {
    return this.getStringAttribute('resource_account_id');
  }
  public set resourceAccountId(value: string) {
    this._resourceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccountIdInput() {
    return this._resourceAccountId;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getNumberAttribute('resource_version');
  }

  // share_id - computed: false, optional: false, required: true
  private _shareId?: string; 
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      meta: cdktf.stringToTerraform(this._meta),
      resource_account_id: cdktf.stringToTerraform(this._resourceAccountId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      share_id: cdktf.stringToTerraform(this._shareId),
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
      meta: {
        value: cdktf.stringToHclTerraform(this._meta),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_account_id: {
        value: cdktf.stringToHclTerraform(this._resourceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_id: {
        value: cdktf.stringToHclTerraform(this._shareId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
