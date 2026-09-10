// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStackServiceAccountTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token#id CloudStackServiceAccountToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the service account token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token#name CloudStackServiceAccountToken#name}
  */
  readonly name: string;
  /**
  * The key expiration in seconds. It is optional. If it is a positive number an expiration date for the key is set. If it is null, zero or is omitted completely (unless `api_key_max_seconds_to_live` configuration option is set) the key will never expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token#seconds_to_live CloudStackServiceAccountToken#seconds_to_live}
  */
  readonly secondsToLive?: number;
  /**
  * The ID of the service account to which the token belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token#service_account_id CloudStackServiceAccountToken#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token#stack_slug CloudStackServiceAccountToken#stack_slug}
  */
  readonly stackSlug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token grafana_cloud_stack_service_account_token}
*/
export class CloudStackServiceAccountToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_stack_service_account_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStackServiceAccountToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStackServiceAccountToken to import
  * @param importFromId The id of the existing CloudStackServiceAccountToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStackServiceAccountToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_stack_service_account_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account_token grafana_cloud_stack_service_account_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStackServiceAccountTokenConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStackServiceAccountTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_stack_service_account_token',
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
    this._id = config.id;
    this._name = config.name;
    this._secondsToLive = config.secondsToLive;
    this._serviceAccountId = config.serviceAccountId;
    this._stackSlug = config.stackSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // seconds_to_live - computed: false, optional: true, required: false
  private _secondsToLive?: number; 
  public get secondsToLive() {
    return this.getNumberAttribute('seconds_to_live');
  }
  public set secondsToLive(value: number) {
    this._secondsToLive = value;
  }
  public resetSecondsToLive() {
    this._secondsToLive = undefined;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      seconds_to_live: cdktf.numberToTerraform(this._secondsToLive),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      stack_slug: cdktf.stringToTerraform(this._stackSlug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
