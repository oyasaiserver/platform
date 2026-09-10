// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K6ProjectLimitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum duration of a test in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits#duration_max_per_test K6ProjectLimits#duration_max_per_test}
  */
  readonly durationMaxPerTest?: number;
  /**
  * The identifier of the project to manage limits for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits#project_id K6ProjectLimits#project_id}
  */
  readonly projectId: string;
  /**
  * Maximum number of concurrent browser virtual users (VUs) used in one test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits#vu_browser_max_per_test K6ProjectLimits#vu_browser_max_per_test}
  */
  readonly vuBrowserMaxPerTest?: number;
  /**
  * Maximum number of concurrent virtual users (VUs) used in one test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits#vu_max_per_test K6ProjectLimits#vu_max_per_test}
  */
  readonly vuMaxPerTest?: number;
  /**
  * Maximum amount of virtual user hours (VU/h) used per one calendar month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits#vuh_max_per_month K6ProjectLimits#vuh_max_per_month}
  */
  readonly vuhMaxPerMonth?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits grafana_k6_project_limits}
*/
export class K6ProjectLimits extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_k6_project_limits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K6ProjectLimits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K6ProjectLimits to import
  * @param importFromId The id of the existing K6ProjectLimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K6ProjectLimits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_k6_project_limits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_project_limits grafana_k6_project_limits} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K6ProjectLimitsConfig
  */
  public constructor(scope: Construct, id: string, config: K6ProjectLimitsConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_k6_project_limits',
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
    this._durationMaxPerTest = config.durationMaxPerTest;
    this._projectId = config.projectId;
    this._vuBrowserMaxPerTest = config.vuBrowserMaxPerTest;
    this._vuMaxPerTest = config.vuMaxPerTest;
    this._vuhMaxPerMonth = config.vuhMaxPerMonth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duration_max_per_test - computed: false, optional: true, required: false
  private _durationMaxPerTest?: number; 
  public get durationMaxPerTest() {
    return this.getNumberAttribute('duration_max_per_test');
  }
  public set durationMaxPerTest(value: number) {
    this._durationMaxPerTest = value;
  }
  public resetDurationMaxPerTest() {
    this._durationMaxPerTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationMaxPerTestInput() {
    return this._durationMaxPerTest;
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

  // vu_browser_max_per_test - computed: false, optional: true, required: false
  private _vuBrowserMaxPerTest?: number; 
  public get vuBrowserMaxPerTest() {
    return this.getNumberAttribute('vu_browser_max_per_test');
  }
  public set vuBrowserMaxPerTest(value: number) {
    this._vuBrowserMaxPerTest = value;
  }
  public resetVuBrowserMaxPerTest() {
    this._vuBrowserMaxPerTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vuBrowserMaxPerTestInput() {
    return this._vuBrowserMaxPerTest;
  }

  // vu_max_per_test - computed: false, optional: true, required: false
  private _vuMaxPerTest?: number; 
  public get vuMaxPerTest() {
    return this.getNumberAttribute('vu_max_per_test');
  }
  public set vuMaxPerTest(value: number) {
    this._vuMaxPerTest = value;
  }
  public resetVuMaxPerTest() {
    this._vuMaxPerTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vuMaxPerTestInput() {
    return this._vuMaxPerTest;
  }

  // vuh_max_per_month - computed: false, optional: true, required: false
  private _vuhMaxPerMonth?: number; 
  public get vuhMaxPerMonth() {
    return this.getNumberAttribute('vuh_max_per_month');
  }
  public set vuhMaxPerMonth(value: number) {
    this._vuhMaxPerMonth = value;
  }
  public resetVuhMaxPerMonth() {
    this._vuhMaxPerMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vuhMaxPerMonthInput() {
    return this._vuhMaxPerMonth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration_max_per_test: cdktf.numberToTerraform(this._durationMaxPerTest),
      project_id: cdktf.stringToTerraform(this._projectId),
      vu_browser_max_per_test: cdktf.numberToTerraform(this._vuBrowserMaxPerTest),
      vu_max_per_test: cdktf.numberToTerraform(this._vuMaxPerTest),
      vuh_max_per_month: cdktf.numberToTerraform(this._vuhMaxPerMonth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration_max_per_test: {
        value: cdktf.numberToHclTerraform(this._durationMaxPerTest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vu_browser_max_per_test: {
        value: cdktf.numberToHclTerraform(this._vuBrowserMaxPerTest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vu_max_per_test: {
        value: cdktf.numberToHclTerraform(this._vuMaxPerTest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vuh_max_per_month: {
        value: cdktf.numberToHclTerraform(this._vuhMaxPerMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
