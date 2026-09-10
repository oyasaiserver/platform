// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticMonitoringProbeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disables browser checks for this probe. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#disable_browser_checks SyntheticMonitoringProbe#disable_browser_checks}
  */
  readonly disableBrowserChecks?: boolean | cdktf.IResolvable;
  /**
  * Disables scripted checks for this probe. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#disable_scripted_checks SyntheticMonitoringProbe#disable_scripted_checks}
  */
  readonly disableScriptedChecks?: boolean | cdktf.IResolvable;
  /**
  * Custom labels to be included with collected metrics and logs. The maximum number of labels for private probes is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#labels SyntheticMonitoringProbe#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Latitude coordinates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#latitude SyntheticMonitoringProbe#latitude}
  */
  readonly latitude: number;
  /**
  * Longitude coordinates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#longitude SyntheticMonitoringProbe#longitude}
  */
  readonly longitude: number;
  /**
  * Name of the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#name SyntheticMonitoringProbe#name}
  */
  readonly name: string;
  /**
  * Public probes are run by Grafana Labs and can be used by all users. Only Grafana Labs managed public probes will be set to `true`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#public SyntheticMonitoringProbe#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * Region of the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#region SyntheticMonitoringProbe#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe grafana_synthetic_monitoring_probe}
*/
export class SyntheticMonitoringProbe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_synthetic_monitoring_probe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticMonitoringProbe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticMonitoringProbe to import
  * @param importFromId The id of the existing SyntheticMonitoringProbe that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticMonitoringProbe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_synthetic_monitoring_probe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/synthetic_monitoring_probe grafana_synthetic_monitoring_probe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticMonitoringProbeConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticMonitoringProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_synthetic_monitoring_probe',
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
    this._disableBrowserChecks = config.disableBrowserChecks;
    this._disableScriptedChecks = config.disableScriptedChecks;
    this._labels = config.labels;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._name = config.name;
    this._public = config.public;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // disable_browser_checks - computed: false, optional: true, required: false
  private _disableBrowserChecks?: boolean | cdktf.IResolvable; 
  public get disableBrowserChecks() {
    return this.getBooleanAttribute('disable_browser_checks');
  }
  public set disableBrowserChecks(value: boolean | cdktf.IResolvable) {
    this._disableBrowserChecks = value;
  }
  public resetDisableBrowserChecks() {
    this._disableBrowserChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBrowserChecksInput() {
    return this._disableBrowserChecks;
  }

  // disable_scripted_checks - computed: false, optional: true, required: false
  private _disableScriptedChecks?: boolean | cdktf.IResolvable; 
  public get disableScriptedChecks() {
    return this.getBooleanAttribute('disable_scripted_checks');
  }
  public set disableScriptedChecks(value: boolean | cdktf.IResolvable) {
    this._disableScriptedChecks = value;
  }
  public resetDisableScriptedChecks() {
    this._disableScriptedChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScriptedChecksInput() {
    return this._disableScriptedChecks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
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

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_browser_checks: cdktf.booleanToTerraform(this._disableBrowserChecks),
      disable_scripted_checks: cdktf.booleanToTerraform(this._disableScriptedChecks),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      name: cdktf.stringToTerraform(this._name),
      public: cdktf.booleanToTerraform(this._public),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_browser_checks: {
        value: cdktf.booleanToHclTerraform(this._disableBrowserChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_scripted_checks: {
        value: cdktf.booleanToHclTerraform(this._disableScriptedChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
