// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleTagGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables or disables Google Tag Gateway for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway#enabled GoogleTagGateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alphanumeric characters only (e.g. /metrics).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway#endpoint GoogleTagGateway#endpoint}
  */
  readonly endpoint: string;
  /**
  * Hides the original client IP address from Google when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway#hide_original_ip GoogleTagGateway#hide_original_ip}
  */
  readonly hideOriginalIp: boolean | cdktf.IResolvable;
  /**
  * Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway#measurement_id GoogleTagGateway#measurement_id}
  */
  readonly measurementId: string;
  /**
  * Set up the associated Google Tag on the zone automatically when enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway#set_up_tag GoogleTagGateway#set_up_tag}
  */
  readonly setUpTag?: boolean | cdktf.IResolvable;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway#zone_id GoogleTagGateway#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway cloudflare_google_tag_gateway}
*/
export class GoogleTagGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_google_tag_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleTagGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleTagGateway to import
  * @param importFromId The id of the existing GoogleTagGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleTagGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_google_tag_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/google_tag_gateway cloudflare_google_tag_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleTagGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleTagGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_google_tag_gateway',
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
    this._enabled = config.enabled;
    this._endpoint = config.endpoint;
    this._hideOriginalIp = config.hideOriginalIp;
    this._measurementId = config.measurementId;
    this._setUpTag = config.setUpTag;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // hide_original_ip - computed: false, optional: false, required: true
  private _hideOriginalIp?: boolean | cdktf.IResolvable; 
  public get hideOriginalIp() {
    return this.getBooleanAttribute('hide_original_ip');
  }
  public set hideOriginalIp(value: boolean | cdktf.IResolvable) {
    this._hideOriginalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOriginalIpInput() {
    return this._hideOriginalIp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // measurement_id - computed: false, optional: false, required: true
  private _measurementId?: string; 
  public get measurementId() {
    return this.getStringAttribute('measurement_id');
  }
  public set measurementId(value: string) {
    this._measurementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measurementIdInput() {
    return this._measurementId;
  }

  // set_up_tag - computed: false, optional: true, required: false
  private _setUpTag?: boolean | cdktf.IResolvable; 
  public get setUpTag() {
    return this.getBooleanAttribute('set_up_tag');
  }
  public set setUpTag(value: boolean | cdktf.IResolvable) {
    this._setUpTag = value;
  }
  public resetSetUpTag() {
    this._setUpTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setUpTagInput() {
    return this._setUpTag;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      hide_original_ip: cdktf.booleanToTerraform(this._hideOriginalIp),
      measurement_id: cdktf.stringToTerraform(this._measurementId),
      set_up_tag: cdktf.booleanToTerraform(this._setUpTag),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_original_ip: {
        value: cdktf.booleanToHclTerraform(this._hideOriginalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      measurement_id: {
        value: cdktf.stringToHclTerraform(this._measurementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_up_tag: {
        value: cdktf.booleanToHclTerraform(this._setUpTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
