// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K6LoadTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of a baseline test run used for results comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test#baseline_test_run_id K6LoadTest#baseline_test_run_id}
  */
  readonly baselineTestRunId?: string;
  /**
  * Identifier of the k6 version used to run the test. If not set, the test is pinned at creation to the current default major version established by Grafana Cloud. Example: 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test#k6_version K6LoadTest#k6_version}
  */
  readonly k6Version?: string;
  /**
  * Human-friendly identifier of the load test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test#name K6LoadTest#name}
  */
  readonly name: string;
  /**
  * The identifier of the project this load test belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test#project_id K6LoadTest#project_id}
  */
  readonly projectId: string;
  /**
  * The k6 test script content. Can be provided inline or via the `file()` function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test#script K6LoadTest#script}
  */
  readonly script: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test grafana_k6_load_test}
*/
export class K6LoadTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_k6_load_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K6LoadTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K6LoadTest to import
  * @param importFromId The id of the existing K6LoadTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K6LoadTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_k6_load_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/k6_load_test grafana_k6_load_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K6LoadTestConfig
  */
  public constructor(scope: Construct, id: string, config: K6LoadTestConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_k6_load_test',
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
    this._baselineTestRunId = config.baselineTestRunId;
    this._k6Version = config.k6Version;
    this._name = config.name;
    this._projectId = config.projectId;
    this._script = config.script;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_test_run_id - computed: false, optional: true, required: false
  private _baselineTestRunId?: string; 
  public get baselineTestRunId() {
    return this.getStringAttribute('baseline_test_run_id');
  }
  public set baselineTestRunId(value: string) {
    this._baselineTestRunId = value;
  }
  public resetBaselineTestRunId() {
    this._baselineTestRunId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineTestRunIdInput() {
    return this._baselineTestRunId;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // k6_version - computed: true, optional: true, required: false
  private _k6Version?: string; 
  public get k6Version() {
    return this.getStringAttribute('k6_version');
  }
  public set k6Version(value: string) {
    this._k6Version = value;
  }
  public resetK6Version() {
    this._k6Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k6VersionInput() {
    return this._k6Version;
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

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_test_run_id: cdktf.stringToTerraform(this._baselineTestRunId),
      k6_version: cdktf.stringToTerraform(this._k6Version),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      script: cdktf.stringToTerraform(this._script),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_test_run_id: {
        value: cdktf.stringToHclTerraform(this._baselineTestRunId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k6_version: {
        value: cdktf.stringToHclTerraform(this._k6Version),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
