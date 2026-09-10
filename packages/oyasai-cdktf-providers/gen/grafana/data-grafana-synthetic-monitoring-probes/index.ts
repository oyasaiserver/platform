// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/synthetic_monitoring_probes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaSyntheticMonitoringProbesConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, only probes that are not deprecated will be returned. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/synthetic_monitoring_probes#filter_deprecated DataGrafanaSyntheticMonitoringProbes#filter_deprecated}
  */
  readonly filterDeprecated?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/synthetic_monitoring_probes grafana_synthetic_monitoring_probes}
*/
export class DataGrafanaSyntheticMonitoringProbes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_synthetic_monitoring_probes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaSyntheticMonitoringProbes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaSyntheticMonitoringProbes to import
  * @param importFromId The id of the existing DataGrafanaSyntheticMonitoringProbes that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/synthetic_monitoring_probes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaSyntheticMonitoringProbes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_synthetic_monitoring_probes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/synthetic_monitoring_probes grafana_synthetic_monitoring_probes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaSyntheticMonitoringProbesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaSyntheticMonitoringProbesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_synthetic_monitoring_probes',
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
    this._filterDeprecated = config.filterDeprecated;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_deprecated - computed: false, optional: true, required: false
  private _filterDeprecated?: boolean | cdktf.IResolvable; 
  public get filterDeprecated() {
    return this.getBooleanAttribute('filter_deprecated');
  }
  public set filterDeprecated(value: boolean | cdktf.IResolvable) {
    this._filterDeprecated = value;
  }
  public resetFilterDeprecated() {
    this._filterDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDeprecatedInput() {
    return this._filterDeprecated;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // probes - computed: true, optional: false, required: false
  private _probes = new cdktf.NumberMap(this, "probes");
  public get probes() {
    return this._probes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_deprecated: cdktf.booleanToTerraform(this._filterDeprecated),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_deprecated: {
        value: cdktf.booleanToHclTerraform(this._filterDeprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
