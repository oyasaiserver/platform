// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_project_allowed_load_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaK6ProjectAllowedLoadZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the project to retrieve private allowed load zones for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_project_allowed_load_zones#project_id DataGrafanaK6ProjectAllowedLoadZones#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_project_allowed_load_zones grafana_k6_project_allowed_load_zones}
*/
export class DataGrafanaK6ProjectAllowedLoadZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_k6_project_allowed_load_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaK6ProjectAllowedLoadZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaK6ProjectAllowedLoadZones to import
  * @param importFromId The id of the existing DataGrafanaK6ProjectAllowedLoadZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_project_allowed_load_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaK6ProjectAllowedLoadZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_k6_project_allowed_load_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/k6_project_allowed_load_zones grafana_k6_project_allowed_load_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaK6ProjectAllowedLoadZonesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaK6ProjectAllowedLoadZonesConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_k6_project_allowed_load_zones',
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
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_load_zones - computed: true, optional: false, required: false
  public get allowedLoadZones() {
    return this.getListAttribute('allowed_load_zones');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
