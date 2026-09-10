// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetManagementCollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the collector. Must be one of: ALLOY, OTEL. Defaults to ALLOY if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_collector#collector_type FleetManagementCollector#collector_type}
  */
  readonly collectorType?: string;
  /**
  * Whether remote configuration for the collector is enabled or not. If the collector is disabled, it will receive empty configurations from the Fleet Management service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_collector#enabled FleetManagementCollector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ID of the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_collector#id FleetManagementCollector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Remote attributes for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_collector#remote_attributes FleetManagementCollector#remote_attributes}
  */
  readonly remoteAttributes?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_collector grafana_fleet_management_collector}
*/
export class FleetManagementCollector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_fleet_management_collector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetManagementCollector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetManagementCollector to import
  * @param importFromId The id of the existing FleetManagementCollector that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_collector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetManagementCollector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_fleet_management_collector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_collector grafana_fleet_management_collector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetManagementCollectorConfig
  */
  public constructor(scope: Construct, id: string, config: FleetManagementCollectorConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_fleet_management_collector',
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
    this._collectorType = config.collectorType;
    this._enabled = config.enabled;
    this._id = config.id;
    this._remoteAttributes = config.remoteAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector_type - computed: true, optional: true, required: false
  private _collectorType?: string; 
  public get collectorType() {
    return this.getStringAttribute('collector_type');
  }
  public set collectorType(value: string) {
    this._collectorType = value;
  }
  public resetCollectorType() {
    this._collectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorTypeInput() {
    return this._collectorType;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // remote_attributes - computed: true, optional: true, required: false
  private _remoteAttributes?: { [key: string]: string }; 
  public get remoteAttributes() {
    return this.getStringMapAttribute('remote_attributes');
  }
  public set remoteAttributes(value: { [key: string]: string }) {
    this._remoteAttributes = value;
  }
  public resetRemoteAttributes() {
    this._remoteAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAttributesInput() {
    return this._remoteAttributes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_type: cdktf.stringToTerraform(this._collectorType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      remote_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._remoteAttributes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collector_type: {
        value: cdktf.stringToHclTerraform(this._collectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._remoteAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
