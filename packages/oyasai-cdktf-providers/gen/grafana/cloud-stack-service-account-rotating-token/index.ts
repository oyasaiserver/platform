// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStackServiceAccountRotatingTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deletes the service account token in Grafana when the resource is destroyed in Terraform, instead of leaving it to expire at its `expiration` time. Use it with `lifecycle { create_before_destroy = true }` to make sure that the new token is created before the old one is deleted. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token#delete_on_destroy CloudStackServiceAccountRotatingToken#delete_on_destroy}
  */
  readonly deleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Duration of the time window before expiring where the token can be rotated, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token#early_rotation_window_seconds CloudStackServiceAccountRotatingToken#early_rotation_window_seconds}
  */
  readonly earlyRotationWindowSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token#id CloudStackServiceAccountRotatingToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prefix for the name of the service account tokens created by this resource. The actual name will be stored in the computed field `name`, which will be in the format `<name_prefix>-<additional_characters>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token#name_prefix CloudStackServiceAccountRotatingToken#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * The token expiration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token#seconds_to_live CloudStackServiceAccountRotatingToken#seconds_to_live}
  */
  readonly secondsToLive: number;
  /**
  * The ID of the service account to which the token belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token#service_account_id CloudStackServiceAccountRotatingToken#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token#stack_slug CloudStackServiceAccountRotatingToken#stack_slug}
  */
  readonly stackSlug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token grafana_cloud_stack_service_account_rotating_token}
*/
export class CloudStackServiceAccountRotatingToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_stack_service_account_rotating_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStackServiceAccountRotatingToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStackServiceAccountRotatingToken to import
  * @param importFromId The id of the existing CloudStackServiceAccountRotatingToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStackServiceAccountRotatingToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_stack_service_account_rotating_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_rotating_token grafana_cloud_stack_service_account_rotating_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStackServiceAccountRotatingTokenConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStackServiceAccountRotatingTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_stack_service_account_rotating_token',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.45.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteOnDestroy = config.deleteOnDestroy;
    this._earlyRotationWindowSeconds = config.earlyRotationWindowSeconds;
    this._id = config.id;
    this._namePrefix = config.namePrefix;
    this._secondsToLive = config.secondsToLive;
    this._serviceAccountId = config.serviceAccountId;
    this._stackSlug = config.stackSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // early_rotation_window_seconds - computed: false, optional: false, required: true
  private _earlyRotationWindowSeconds?: number; 
  public get earlyRotationWindowSeconds() {
    return this.getNumberAttribute('early_rotation_window_seconds');
  }
  public set earlyRotationWindowSeconds(value: number) {
    this._earlyRotationWindowSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyRotationWindowSecondsInput() {
    return this._earlyRotationWindowSeconds;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // has_expired - computed: true, optional: false, required: false
  public get hasExpired() {
    return this.getBooleanAttribute('has_expired');
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // seconds_to_live - computed: false, optional: false, required: true
  private _secondsToLive?: number; 
  public get secondsToLive() {
    return this.getNumberAttribute('seconds_to_live');
  }
  public set secondsToLive(value: number) {
    this._secondsToLive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsToLiveInput() {
    return this._secondsToLive;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // stack_slug - computed: false, optional: false, required: true
  private _stackSlug?: string; 
  public get stackSlug() {
    return this.getStringAttribute('stack_slug');
  }
  public set stackSlug(value: string) {
    this._stackSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSlugInput() {
    return this._stackSlug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_on_destroy: cdktf.booleanToTerraform(this._deleteOnDestroy),
      early_rotation_window_seconds: cdktf.numberToTerraform(this._earlyRotationWindowSeconds),
      id: cdktf.stringToTerraform(this._id),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      seconds_to_live: cdktf.numberToTerraform(this._secondsToLive),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      stack_slug: cdktf.stringToTerraform(this._stackSlug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      early_rotation_window_seconds: {
        value: cdktf.numberToHclTerraform(this._earlyRotationWindowSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      seconds_to_live: {
        value: cdktf.numberToHclTerraform(this._secondsToLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_slug: {
        value: cdktf.stringToHclTerraform(this._stackSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
