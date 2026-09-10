// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStackServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account#id CloudStackServiceAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The disabled status for the service account. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account#is_disabled CloudStackServiceAccount#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account#name CloudStackServiceAccount#name}
  */
  readonly name: string;
  /**
  * The basic role of the service account in the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account#role CloudStackServiceAccount#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account#stack_slug CloudStackServiceAccount#stack_slug}
  */
  readonly stackSlug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account grafana_cloud_stack_service_account}
*/
export class CloudStackServiceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_stack_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStackServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStackServiceAccount to import
  * @param importFromId The id of the existing CloudStackServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStackServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_stack_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack_service_account grafana_cloud_stack_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStackServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStackServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_stack_service_account',
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
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._role = config.role;
    this._stackSlug = config.stackSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_disabled - computed: false, optional: true, required: false
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.stringToTerraform(this._role),
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
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
