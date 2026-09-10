// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudPrivateDataSourceConnectNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name of the PDC network. Defaults to the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network#display_name CloudPrivateDataSourceConnectNetwork#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network#id CloudPrivateDataSourceConnectNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the PDC network.**Note:** The name must be lowercase and can contain hyphens or underscores. See full requirements here: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#request-body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network#name CloudPrivateDataSourceConnectNetwork#name}
  */
  readonly name: string;
  /**
  * The region where your stack is deployed. Use the instances list API to get the region for your instance - use the regionSlug property: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#list-stacks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network#region CloudPrivateDataSourceConnectNetwork#region}
  */
  readonly region: string;
  /**
  * The identifier of the stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network#stack_identifier CloudPrivateDataSourceConnectNetwork#stack_identifier}
  */
  readonly stackIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network grafana_cloud_private_data_source_connect_network}
*/
export class CloudPrivateDataSourceConnectNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_private_data_source_connect_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudPrivateDataSourceConnectNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudPrivateDataSourceConnectNetwork to import
  * @param importFromId The id of the existing CloudPrivateDataSourceConnectNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudPrivateDataSourceConnectNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_private_data_source_connect_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_private_data_source_connect_network grafana_cloud_private_data_source_connect_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudPrivateDataSourceConnectNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: CloudPrivateDataSourceConnectNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_private_data_source_connect_network',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._stackIdentifier = config.stackIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // pdc_network_id - computed: true, optional: false, required: false
  public get pdcNetworkId() {
    return this.getStringAttribute('pdc_network_id');
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

  // stack_identifier - computed: false, optional: false, required: true
  private _stackIdentifier?: string; 
  public get stackIdentifier() {
    return this.getStringAttribute('stack_identifier');
  }
  public set stackIdentifier(value: string) {
    this._stackIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdentifierInput() {
    return this._stackIdentifier;
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      stack_identifier: cdktf.stringToTerraform(this._stackIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      stack_identifier: {
        value: cdktf.stringToHclTerraform(this._stackIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
