// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderAwsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional human-readable name for this AWS Account resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_account#name CloudProviderAwsAccount#name}
  */
  readonly name?: string;
  /**
  * A set of regions that this AWS Account resource applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_account#regions CloudProviderAwsAccount#regions}
  */
  readonly regions: string[];
  /**
  * An IAM Role ARN string to represent with this AWS Account resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_account#role_arn CloudProviderAwsAccount#role_arn}
  */
  readonly roleArn: string;
  /**
  * The StackID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_account#stack_id CloudProviderAwsAccount#stack_id}
  */
  readonly stackId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_account grafana_cloud_provider_aws_account}
*/
export class CloudProviderAwsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_provider_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProviderAwsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProviderAwsAccount to import
  * @param importFromId The id of the existing CloudProviderAwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProviderAwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_provider_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/cloud_provider_aws_account grafana_cloud_provider_aws_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProviderAwsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProviderAwsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_provider_aws_account',
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
    this._name = config.name;
    this._regions = config.regions;
    this._roleArn = config.roleArn;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stack_id: cdktf.stringToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
