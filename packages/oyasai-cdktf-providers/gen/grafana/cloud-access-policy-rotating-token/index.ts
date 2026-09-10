// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAccessPolicyRotatingTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the access policy for which to create a token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#access_policy_id CloudAccessPolicyRotatingToken#access_policy_id}
  */
  readonly accessPolicyId: string;
  /**
  * Deletes the token in Grafana Cloud when the resource is destroyed in Terraform, instead of leaving it to expire at its `expires_at` time. Use it with `lifecycle { create_before_destroy = true }` to make sure that the new token is created before the old one is deleted. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#delete_on_destroy CloudAccessPolicyRotatingToken#delete_on_destroy}
  */
  readonly deleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Display name of the access policy token. Defaults to the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#display_name CloudAccessPolicyRotatingToken#display_name}
  */
  readonly displayName?: string;
  /**
  * Duration of the window before expiring where the token can be rotated (e.g. '24h', '30m', '1h30m'). Valid units are 's' (seconds), 'm' (minutes) and 'h' (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#early_rotation_window CloudAccessPolicyRotatingToken#early_rotation_window}
  */
  readonly earlyRotationWindow: string;
  /**
  * Duration after which the token will expire (e.g. '24h', '30m', '1h30m'). Valid units are 's' (seconds), 'm' (minutes) and 'h' (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#expire_after CloudAccessPolicyRotatingToken#expire_after}
  */
  readonly expireAfter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#id CloudAccessPolicyRotatingToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prefix for the name of the access policy token. The actual name will be stored in the computed field `name`, which will be in the format '<name_prefix>-<expiration_timestamp>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#name_prefix CloudAccessPolicyRotatingToken#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * Region of the access policy. Should be set to the same region as the access policy. Use the region list API to get the list of available regions: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#list-regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#region CloudAccessPolicyRotatingToken#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token grafana_cloud_access_policy_rotating_token}
*/
export class CloudAccessPolicyRotatingToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_access_policy_rotating_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAccessPolicyRotatingToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAccessPolicyRotatingToken to import
  * @param importFromId The id of the existing CloudAccessPolicyRotatingToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAccessPolicyRotatingToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_access_policy_rotating_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_access_policy_rotating_token grafana_cloud_access_policy_rotating_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAccessPolicyRotatingTokenConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAccessPolicyRotatingTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_access_policy_rotating_token',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicyId = config.accessPolicyId;
    this._deleteOnDestroy = config.deleteOnDestroy;
    this._displayName = config.displayName;
    this._earlyRotationWindow = config.earlyRotationWindow;
    this._expireAfter = config.expireAfter;
    this._id = config.id;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_id - computed: false, optional: false, required: true
  private _accessPolicyId?: string; 
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
  }
  public set accessPolicyId(value: string) {
    this._accessPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyIdInput() {
    return this._accessPolicyId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delete_on_destroy - computed: false, optional: true, required: false
  private _deleteOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteOnDestroy() {
    return this.getBooleanAttribute('delete_on_destroy');
  }
  public set deleteOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteOnDestroy = value;
  }
  public resetDeleteOnDestroy() {
    this._deleteOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnDestroyInput() {
    return this._deleteOnDestroy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // early_rotation_window - computed: false, optional: false, required: true
  private _earlyRotationWindow?: string; 
  public get earlyRotationWindow() {
    return this.getStringAttribute('early_rotation_window');
  }
  public set earlyRotationWindow(value: string) {
    this._earlyRotationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyRotationWindowInput() {
    return this._earlyRotationWindow;
  }

  // expire_after - computed: false, optional: false, required: true
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_prefix - computed: false, optional: false, required: true
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // ready_for_rotation - computed: true, optional: false, required: false
  public get readyForRotation() {
    return this.getBooleanAttribute('ready_for_rotation');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
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
      access_policy_id: cdktf.stringToTerraform(this._accessPolicyId),
      delete_on_destroy: cdktf.booleanToTerraform(this._deleteOnDestroy),
      display_name: cdktf.stringToTerraform(this._displayName),
      early_rotation_window: cdktf.stringToTerraform(this._earlyRotationWindow),
      expire_after: cdktf.stringToTerraform(this._expireAfter),
      id: cdktf.stringToTerraform(this._id),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_id: {
        value: cdktf.stringToHclTerraform(this._accessPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      early_rotation_window: {
        value: cdktf.stringToHclTerraform(this._earlyRotationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_after: {
        value: cdktf.stringToHclTerraform(this._expireAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
