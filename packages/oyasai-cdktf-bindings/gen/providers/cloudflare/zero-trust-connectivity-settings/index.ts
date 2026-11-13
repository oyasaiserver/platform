// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_connectivity_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustConnectivitySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_connectivity_settings#account_id ZeroTrustConnectivitySettings#account_id}
  */
  readonly accountId: string;
  /**
  * A flag to enable the ICMP proxy for the account network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_connectivity_settings#icmp_proxy_enabled ZeroTrustConnectivitySettings#icmp_proxy_enabled}
  */
  readonly icmpProxyEnabled?: boolean | cdktf.IResolvable;
  /**
  * A flag to enable WARP to WARP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_connectivity_settings#offramp_warp_enabled ZeroTrustConnectivitySettings#offramp_warp_enabled}
  */
  readonly offrampWarpEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_connectivity_settings cloudflare_zero_trust_connectivity_settings}
*/
export class ZeroTrustConnectivitySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_connectivity_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustConnectivitySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustConnectivitySettings to import
  * @param importFromId The id of the existing ZeroTrustConnectivitySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_connectivity_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustConnectivitySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_connectivity_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_connectivity_settings cloudflare_zero_trust_connectivity_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustConnectivitySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustConnectivitySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_connectivity_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.29.0'
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
    this._icmpProxyEnabled = config.icmpProxyEnabled;
    this._offrampWarpEnabled = config.offrampWarpEnabled;
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

  // icmp_proxy_enabled - computed: false, optional: true, required: false
  private _icmpProxyEnabled?: boolean | cdktf.IResolvable; 
  public get icmpProxyEnabled() {
    return this.getBooleanAttribute('icmp_proxy_enabled');
  }
  public set icmpProxyEnabled(value: boolean | cdktf.IResolvable) {
    this._icmpProxyEnabled = value;
  }
  public resetIcmpProxyEnabled() {
    this._icmpProxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpProxyEnabledInput() {
    return this._icmpProxyEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // offramp_warp_enabled - computed: false, optional: true, required: false
  private _offrampWarpEnabled?: boolean | cdktf.IResolvable; 
  public get offrampWarpEnabled() {
    return this.getBooleanAttribute('offramp_warp_enabled');
  }
  public set offrampWarpEnabled(value: boolean | cdktf.IResolvable) {
    this._offrampWarpEnabled = value;
  }
  public resetOfframpWarpEnabled() {
    this._offrampWarpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offrampWarpEnabledInput() {
    return this._offrampWarpEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      icmp_proxy_enabled: cdktf.booleanToTerraform(this._icmpProxyEnabled),
      offramp_warp_enabled: cdktf.booleanToTerraform(this._offrampWarpEnabled),
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
      icmp_proxy_enabled: {
        value: cdktf.booleanToHclTerraform(this._icmpProxyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      offramp_warp_enabled: {
        value: cdktf.booleanToHclTerraform(this._offrampWarpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
